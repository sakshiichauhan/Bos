/* ───────── Join.tsx (type-error-free) ──────────────────────────────── */
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import RenderInput from "@/pages/Components/RenderInput";
import Button from "@/pages/Components/Button";
import VerificationCode from "@/pages/Components/VerificationCard";
import ThankYou from "@/pages/Components/ThankYou";
import WhatYouGet from "@/pages/Components/WhatYouGet";
import Appbar from "@/components/Layouts/Navbar";
import useOtp from "@/hooks/useOtp";
import PlayerIcon from "@/assets/Form/Join/Player.png";
import VolunteerIcon from "@/assets/Form/Join/Volunteer.png";
import OrganizerIcon from "@/assets/Form/Join/Organizer.png";
import ContentIcon from "@/assets/Form/Join/Content.png";
import SupporterIcon from "@/assets/Form/Join/Supporter.png";

import men from "@/assets/Form/men.png";
import women from "@/assets/Form/woman.png";
import otherIcon from "@/assets/Form/other.png";
import menR from "@/assets/Form/menR.png";
import womenR from "@/assets/Form/womanR.png";
import otherR from "@/assets/Form/otherR.png";
import {JOIN_URL} from "@/config";

import TargetLogo from "@/assets/Form/Join/Target.png";
import WhatsApp from "@/assets/Form/Join/w1.png";

type Gender = "male" | "female" | "other";

interface JoinAs {
  id: string;
  label: string;
  icon: string;
}

interface FormState {
  name: string;
  dob: string;
  locality: string;
  email: string;
  gender: Gender;
  joinAs: string[];
}


const JOIN_AS_OPTIONS: readonly JoinAs[] = [
  { id: "player", label: "Player", icon: PlayerIcon },
  { id: "volunteer", label: "Volunteer", icon: VolunteerIcon },
  { id: "organizer", label: "Organizer", icon: OrganizerIcon },
  { id: "content_creator", label: "Content Creator", icon: ContentIcon },
  { id: "supporter", label: "Supporter", icon: SupporterIcon },
] as const;

const GENDERS: readonly Gender[] = ["male", "female", "other"];

const genderIcon: Record<Gender, string> = {
  male: men,
  female: women,
  other: otherIcon,
};
const genderIconSel: Record<Gender, string> = {
  male: menR,
  female: womenR,
  other: otherR,
};

/* ---- utils ---- */
const todayISO = new Date().toISOString().split("T")[0];

/* ═════════════════ component ════════════════════════════════════════ */
const Join = () => {
  /* otp state */
  const [mobile, setMobile] = useState("");
  const {
    otpSent,
    verified,
    verifying,
    error: otpError,
    sendOtp,
    verifyOtp,
    reset: resetOtp,
  } = useOtp();

  /* form state */
  const [form, setForm] = useState<FormState>({
    name: "",
    dob: "",
    locality: "",
    email: "",
    gender: "male",
    joinAs: [],
  });

  const [loading, setLoading] = useState(false);
  const [showTY, setShowTY] = useState(false);
  const [formError, setFormError] = useState("");

  /* ---- helpers ---------------------------------------------------- */
  const setField =
    (field: keyof FormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm(f => ({ ...f, [field]: e.target.value }));

  const setGender =
    (g: Gender) => () => setForm(f => ({ ...f, gender: g }));

  const setJoinAs =
    (id: string) => () =>
      setForm(f => ({
        ...f,
        joinAs: f.joinAs.includes(id)
          ? f.joinAs.filter(j => j !== id)
          : [...f.joinAs, id],
      }));

  /* ---- OTP -------------------------------------------------------- */
  const handleSendOtp = async () => {
    try {
      const { data } = await axios.post(
        "https://hswf.network/api/send/otp",
        { phone: mobile },
        { headers: { "Content-Type": "application/json" } }
      );

      if (data?.status === "error") {
        toast.error(data.message ?? "Failed to send OTP");
        return;
      }

      if (data?.message === "User Exists!" && data?.data) {
        toast.info("Existing user found – details pre-filled.");
        preloadForm(data.data);
      }

      await sendOtp(mobile);
    } catch (err) {
      console.error(err);
      toast.error("Failed to send OTP – try again.");
    }
  };

  const handleResendOtp = () => sendOtp(mobile);

  const handleVerifyOtp = async (otp: string) => {
    try {
      const user = await verifyOtp(mobile, otp);
      if (user) {
        toast.info("Existing user found – details pre-filled.");
        preloadForm(user);
      }
    } catch {
      /* hook already toasts */
    }
  };

  const preloadForm = (u: any) => {
    setForm({
      name: u?.name ?? "",
      dob: u?.dob ?? "",
      locality: u?.address ?? "",
      email: u?.email ?? "",
      gender: (u?.gender ?? "male") as Gender,
      joinAs: u?.join_as ? String(u.join_as).split(",") : [],
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    if (!form.name.trim()) {
      toast.error("Full name is required");
      return;
    }
    if (!form.dob) {
      toast.error("Date of birth is required");
      return;
    }
    if (!form.gender) {
      toast.error("Gender is required");
      return;
    }
    if (!form.joinAs.length) {
      toast.error("Please select at least one option for 'Join BOS as'");
      return;
    }

    if (form.email && !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(form.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const birth = new Date(form.dob);
    const now = new Date();

    if (birth > now) {
      toast.error("DOB cannot be in the future");
      return;
    }

    let age = now.getFullYear() - birth.getFullYear();
    const m = now.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;

    if (age < 14) {
      toast.error("You must be at least 14 years old");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `${JOIN_URL}`,
        {
          name: form.name,
          email: form.email,
          phone: mobile,
          gender: form.gender,
          locality: form.locality,
          dob: form.dob,
          join_as: form.joinAs[0] ?? "",
        },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Form submitted!");
      setShowTY(true);
    } catch (err: any) {
      setFormError(
        err?.response?.data?.error
          ? Object.values(err.response.data.error).join(", ")
          : "Submission failed – try again."
      );
    } finally {
      setLoading(false);
    }
  };

  /* ---- reset ------------------------------------------------------ */
  const hardReset = () => {
    resetOtp();
    setMobile("");
    setShowTY(false);
    setForm({
      name: "",
      dob: "",
      locality: "",
      email: "",
      gender: "male",
      joinAs: [],
    });
    setFormError("");
  };

  /* ---- render ----------------------------------------------------- */
  return (
    <>

      <Appbar />
    
        
   <Information />
      {!otpSent && (
        <PhoneCard
          mobile={mobile}
          onChange={e =>
            setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
          }
          onGenerate={handleSendOtp}
          loading={verifying}
        />
      )}

      {otpSent && !verified && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85">
          <VerificationCode
            phoneNumber={`+91 ${mobile}`}
            onVerify={handleVerifyOtp}
            onResend={handleResendOtp}
            onChangeNumber={hardReset}
            loading={verifying}
            error={otpError}
          />
        </div>
      )}

      {verified && !showTY && (
        <FormCard
          form={form}
          setField={setField}
          setGender={setGender}
          setJoinAs={setJoinAs}
          loading={loading}
          formError={formError}
          onSubmit={handleSubmit}
        />
      )}

      {showTY && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/85">
          <ThankYou
            onClose={hardReset}
            title="For Registering with the BOS Community!"
            subtitle="We've received your registration details. Our team will get in touch with you shortly based on your selected participation type."
          />
        </div>
        
      )}
    
  <WhatYouGet />
   


    </>
    
  );
   
};

export default Join;


interface PhoneProps {
  mobile: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerate: () => void;
  loading: boolean;
}

const PhoneCard = ({ mobile, onChange, onGenerate, loading }: PhoneProps) => (
  <section className="mt-[100px] mb-[60px] flex justify-center">
    <div className="w-full max-w-[1136px] bg-white px-8 py-10 md:px-16 md:py-14 ">
      <h1 className="font-semibold text-[32px] md:text-[40px] lg:text-[40px] mb-2">
    Register For Event
      </h1>

      <p className="text-left text-base md:text-lg lg:text-xl font-medium mb-6">
        Please enter a 10-digit mobile number to receive OTP
      </p>

      <div className="relative w-full mb-5">
        <label
          htmlFor="phone"
          className="absolute -top-2 left-2 bg-white px-1 text-sm"
        >
          Mobile Number <span className="text-red-600">*</span>
        </label>
        <div className="flex">
          <span className="flex items-center px-3 h-[68px] bg-[#F8F8F8] border border-[#F8F8F8] rounded-l-md text-lg">
            +91
          </span>
          <input
            id="phone"
            type="tel"
            maxLength={10}
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={onChange}
            className="flex-1 h-[68px] px-4 bg-[#F8F8F8] border border-l-0 border-[#F8F8F8] rounded-r-md focus:outline-none text-lg"
          />
        </div>
      </div>

      <Button
        type="button"
        text={loading ? "Sending OTP…" : "Generate OTP"}
        disabled={mobile.length !== 10 || loading}
        onClick={onGenerate}
        className="px-16 py-4 text-xl md:text-2xl"
      />
    </div>
  </section>
);

/* ---- form card ------------------------------------------------------ */
interface FormProps {
  form: FormState;
  setField: (f: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setGender: (g: Gender) => () => void;
  setJoinAs: (id: string) => () => void;
  loading: boolean;
  formError: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormCard = ({
  form,
  setField,
  setGender,
  setJoinAs,
  loading,
  formError,
  onSubmit,
}: FormProps) => (
  <div className="pt-10 pb-10">
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[1136px] mx-auto bg-white px-8 py-10 md:px-16 md:py-14 shadow-[0_2px_12px_rgba(0,0,0,0.07)]"
    >
      <h1 className="font-bold text-[32px] md:text-[40px] mb-10">
        Fill in your details
      </h1>

      {/* name + gender */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <RenderInput
          label="Full name"
          name="name"
          value={form.name}
          onChange={setField("name")}
          placeholder="Enter your name"
          required
        />

        {/* gender selector – label + buttons in one row */}
        <div className="flex items-center gap-6">
          <span className="font-medium text-sm">
            Gender <span className="text-red-600">*</span>
          </span>

          <div className="flex gap-6">
            {GENDERS.map(g => (
              <button
                key={g}
                type="button"
                onClick={setGender(g)}
                className="flex flex-col items-center border-0 focus:outline-none"
              >
                <img
                  src={form.gender === g ? genderIconSel[g] : genderIcon[g]}
                  className="w-auto md:h-[30px] "
                  alt={g}
                />
                <span
                  className={`mt-1 text-base ${form.gender === g ? "text-red-600" : "text-black"
                    }`}
                >
                  {g[0].toUpperCase() + g.slice(1)}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* dob + email */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <RenderInput
          label="DOB"
          name="dob"
          type="date"
          value={form.dob}
          onChange={setField("dob")}
          max={todayISO}
          required
        />
        <RenderInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={setField("email")}
        />
      </div>

      {/* locality */}
      <div className="mb-6">
        <RenderInput
          label="Locality"
          name="locality"
          placeholder="Enter Your Society Name (As Listed On Google Maps)"
          value={form.locality}
          onChange={setField("locality")}
        />
      </div>

      {/* join-as chips */}
      <div className="mb-6">
        <span className="block font-semibold mb-2 text-lg">Join BOS as</span>
        <div className="flex flex-wrap gap-3">
          {JOIN_AS_OPTIONS.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              onClick={setJoinAs(id)}
              className={`flex items-center gap-2 px-6 py-3 border rounded
                ${form.joinAs.includes(id)
                  ? "border-[#e60023] bg-white"
                  : "border-[#E4E4E4] bg-[#FAFAFA]"
                }`}
            >
              <img src={icon} className="w-5 h-5" alt={label} />
              <span className="text-base">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* notes + submit */}
      <p className="flex items-center gap-2 text-[18px] mb-6">
        <img src={WhatsApp} className="w-5 h-5" alt="whatsapp" />
        Confirmation and event kit details will be shared via email / WhatsApp
      </p>

      <Button
        type="submit"
        text={loading ? "Submitting…" : "Submit"}
        disabled={loading}
        className="SubmitBtn gradientButton"
      />

      <p className="flex items-center gap-2 font-semibold text-[20px] mt-6">
        <img src={TargetLogo} className="w-5 h-5" alt="target" />
        Don&apos;t miss your chance to be part of something bigger than the game.
      </p>

      {formError && (
        <p className="mt-4 text-[#e60023] text-base text-center">{formError}</p>
      )}
    </form>
  </div>
);

/* ---- landing copy --------------------------------------------------- */
const Information = () => (
  <section
    className="bg-gray-100
               px-4 py-8
               md:px-[80px] md:py-10
               lg:px-[120px] lg:py-12
               xl:px-[193px] xl:py-16
               text-left md:text-center"
  >
    <div className="max-w-[1920px] mt-10 md:mt-16 lg:mt-20 mx-auto">
      <h1 className="font-semibold text-[32px] md:text-[40px] lg:text-[48px] xl:text-[64px] text-[#000000] mb-4">
        Join&nbsp;the&nbsp;Movement
      </h1>
      <h2 className="font-semibold text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] mb-6">
        Be more than just a spectator — be the spirit of the game.
      </h2>
      <p
        className="mx-auto
                   text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                   leading-[1.4] md:leading-[1.5] xl:leading-[1.2]
                   text-[#575757]
                   max-w-[1138px]"
      >
        Join hundreds of passionate individuals coming together to celebrate
        heritage, sportsmanship, and community pride. Whether you're playing,
        volunteering, organizing, or just capturing the moments — you matter.
      </p>
    </div>
   
  </section>
);
