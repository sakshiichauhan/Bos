/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

import Appbar from "@/components/Layouts/Navbar";
import RenderInput from "@/pages/Components/RenderInput";
import Button from "@/pages/Components/Button";
import VerificationCode from "@/pages/Components/VerificationCard";
import ThankYou from "@/pages/Components/ThankYou";
import useOtp from "@/hooks/useOtp";
import axios from "axios";
import { toast } from "sonner";

// ─── icons ────────────────────────────────────────────────────────────────
import schoolCollegeIcon from "@/assets/Form/PartnerInterest/School.png";
import corporateBrandIcon from "@/assets/Form/PartnerInterest/Bag.png";
import ngoFoundationIcon from "@/assets/Form/PartnerInterest/Hand.png";
import sportsClubIcon from "@/assets/Form/PartnerInterest/Club.png";
import individualFreelancerIcon from "@/assets/Form/PartnerInterest/Individual.png";
import hostEventIcon from "@/assets/Form/PartnerInterest/Host.png";
import sponsorTournamentsIcon from "@/assets/Form/PartnerInterest/Sponsor.png";
import promoteMediaIcon from "@/assets/Form/PartnerInterest/Mic.png";
import supportResourcesIcon from "@/assets/Form/PartnerInterest/Location.png";
import csrIcon from "@/assets/Form/PartnerInterest/Csr.png";

// ─── option defs ──────────────────────────────────────────────────────────
type Option = { id: string; label: string; iconSrc: string };

const TYPE_OPTIONS: Option[] = [
  { id: "school_college", label: "School / College", iconSrc: schoolCollegeIcon },
  { id: "corporate_brand", label: "Corporate / Brand", iconSrc: corporateBrandIcon },
  { id: "ngo_foundation", label: "NGO / Foundation", iconSrc: ngoFoundationIcon },
  { id: "sports_club", label: "Sports Club / Association", iconSrc: sportsClubIcon },
  { id: "individual_freelancer", label: "Individual / Freelancer", iconSrc: individualFreelancerIcon },
];

const INTEREST_OPTIONS: Option[] = [
  { id: "host_events", label: "Host or co-organize events", iconSrc: hostEventIcon },
  { id: "sponsor_tournaments", label: "Sponsor tournaments or initiatives", iconSrc: sponsorTournamentsIcon },
  { id: "promote_media", label: "Promote BOS through media", iconSrc: promoteMediaIcon },
  { id: "support_resources", label: "Support with resources or venues", iconSrc: supportResourcesIcon },
  { id: "csr_engagement", label: "CSR or community engagement", iconSrc: csrIcon },
];

// ─── page ─────────────────────────────────────────────────────────────────
export default function PartnerInterest() {
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [verifiedMobile, setVerifiedMobile] = useState("");

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="flex flex-col min-h-screen">
      <Appbar />
      <PartnerBond />

      {showThankYou ? (
                <div className="fixed inset-0 z-50 grid place-items-center bg-black/85">
        <ThankYou
          title="For Your Sponsorship Interest in Bond Over Sports!"
          subtitle="Your submission has been successfully received. Our sponsorship team will review your inquiry and reach out to you soon to discuss the exciting opportunities ahead."
          onClose={() => {
            setShowThankYou(false);
            setIsOtpVerified(false);
          }}
        />
        </div>
      ) : !isOtpVerified ? (
        <RegisterForEvent
          onVerified={(m) => {
            setVerifiedMobile(m);
            setIsOtpVerified(true);
          }}
        />
      ) : (
        <FormBody
          verifiedMobile={verifiedMobile}
          onSuccess={() => setShowThankYou(true)}
        />
      )}

 
    </div>
  );
}

// ─── hero ─────────────────────────────────────────────────────────────────
function PartnerBond() {
  return (
    <section className="bg-[#F8F8F8] h-[400px] flex flex-col items-center justify-center gap-6 px-[15rem] py-[5rem] text-center
                        max-xl:px-[120px] max-lg:px-[80px] max-md:px-4 max-md:py-8">
      <h1 className="text-[54px] font-semibold leading-tight max-xl:text-[48px] max-lg:text-[40px] max-md:text-[32px]">
        Partner with Bond Over Sports
      </h1>
      <h2 className="text-[36px] font-normal leading-tight max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px]">
        Let’s Build a Movement. Together.
      </h2>
      <p className="max-w-[80rem] text-[18px] text-[#898989] max-xl:max-w-[700px] max-lg:max-w-[600px] max-md:text-left max-md:text-[14px]">
        We collaborate with institutions, brands, NGOs, clubs, and changemakers
        who believe in the power of sports to bring people together and celebrate
        cultural legacy. If you’re passionate about impact, youth engagement, and
        community development — we’d love to hear from you.
      </p>
    </section>
  );
}



interface RegisterForEventProps {
  onVerified: (mobile: string) => void;
}

function RegisterForEvent({ onVerified }: RegisterForEventProps) {
  const [mobileNumber, setMobileNumber] = useState("");
  const { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset } = useOtp();

  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10));
  };

  const handleVerify = async (otp: string) => {
    const ok = await verifyOtp(mobileNumber, otp);
    if (ok) onVerified(mobileNumber);
  };

  return (
    <>
      {otpSent && !verified && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <VerificationCode
            phoneNumber={`+91 ${mobileNumber}`} // fixed string interpolation
            loading={verifying}
            error={error}
            onVerify={handleVerify}
            onResend={() => sendOtp(mobileNumber)}
            onChangeNumber={reset}            // restore “change number”
          />
        </div>
      )}

      {/* Styled like PhoneCard from Join.tsx */}
      <section className="mt-[100px] mb-[60px] flex justify-center">
        <div className="w-full max-w-[1136px] bg-white px-8 py-10 md:px-16 md:py-14 shadow-[0_2px_12px_rgba(0,0,0,0.07)]">
          <h1 className="font-bold text-[32px] md:text-[40px] mb-10">
            Partner Interest Form
          </h1>

          <p className="text-left text-base md:text-lg font-medium mb-6">
            Please enter a 10-digit mobile number to receive OTP
          </p>

          <div className="relative w-full mb-5">
            <label
              htmlFor="partner-phone"
              className="absolute -top-2 left-2 bg-white px-1 text-sm"
            >
              Mobile Number <span className="text-red-600">*</span>
            </label>
            <div className="flex">
              <span className="flex items-center px-3 h-[68px] bg-[#F8F8F8] border border-[#F8F8F8] rounded-l-md text-lg">
                +91
              </span>
              <input
                id="partner-phone"
                type="tel"
                maxLength={10}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                className="flex-1 h-[68px] px-4 bg-[#F8F8F8] border border-l-0 border-[#F8F8F8] rounded-r-md focus:outline-none text-lg"
              />
            </div>
            {error && <p className="mt-2 text-red-500">{error}</p>}
          </div>

          <Button
            type="button"
            text={verifying ? "Sending OTP…" : "Generate OTP"}
            disabled={mobileNumber.length !== 10 || verifying}
            onClick={() => sendOtp(mobileNumber)}
            className="px-16 py-4 text-xl md:text-2xl"
          />
        </div>
      </section>
    </>
  );
}


interface FormBodyProps {
  verifiedMobile: string;
  onSuccess: () => void;
}

function FormBody({ verifiedMobile, onSuccess }: FormBodyProps) {
  // form state
  const [organizationName, setOrganizationName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState(verifiedMobile);

  const [selectedOrgType, setSelectedOrgType] = useState<string>("");
  const [selectedInterestTypes, setSelectedInterestTypes] = useState<string[]>([]);

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // helpers
  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validateName = (v: string) => v.length >= 2 && /^[a-zA-Z\s]+$/.test(v);
  const validateOrg = (v: string) => v.length >= 3;

  // submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validation with sonner toasts
    if (!organizationName.trim()) {
      toast.error("Organization / Brand Name is required");
      return;
    }
    if (!validateOrg(organizationName)) {
      toast.error("Organization name must be at least 3 characters");
      return;
    }
    if (!name.trim()) {
      toast.error("Your Name is required");
      return;
    }
    if (!validateName(name)) {
      toast.error("Name must be at least 2 characters and contain only letters/spaces");
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!mobileNumber.trim()) {
      toast.error("Mobile Number is required");
      return;
    }
    if (!/^\d{10}$/.test(mobileNumber)) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }
    if (!selectedOrgType) {
      toast.error("Please select a type of organization");
      return;
    }

    try {
      setLoading(true);
      const fd = new FormData();
      fd.append("organisation_name", organizationName);
      fd.append("name", name);
      fd.append("phone", mobileNumber);
      fd.append("email", email);
      fd.append("type", selectedOrgType);
      selectedInterestTypes.forEach((x) => fd.append("interests_area[]", x));
      fd.append("query", description);

      await axios.post("https://hswf.network/api/partner/interests", fd, {
        headers: { Accept: "application/json" },
      });

      toast.success("Thank you for your interest! We will get back to you soon.");

      // reset state (mirrors JSX version)
      setOrganizationName("");
      setName("");
      setEmail("");
      setMobileNumber("");
      setSelectedOrgType("");
      setSelectedInterestTypes([]);
      setDescription("");

      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // ui
  return (
    <section className="bg-white flex justify-center px-5 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1136px] bg-[#FEFEFE] p-8 md:p-12 border"
      >
        <h1 className="text-[54px] font-semibold mb-6 max-md:text-[40px]">
          Partner Interest Form
        </h1>

        {/* Organization info */}
        <h2 className="text-2xl mb-4">Organization Info</h2>

        <RenderInput
          required
          label="Organization / Brand Name"
          name="organizationName"
          type="text"
          placeholder="Enter Organization / Brand Name"
          value={organizationName}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setOrganizationName(e.target.value)}
        />

        <RenderInput
          required
          label="Your Name"
          name="name"
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <RenderInput
          required
          label="Email"
          name="email"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />

        {/* mobile */}
        <div className="relative w-full mb-6">
          <label className="absolute -top-2 left-2 bg-white px-1 text-sm">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <div className="flex">
            <span className="flex items-center px-3 h-16 bg-[#F8F8F8] border rounded-l-md text-lg text-[#4D4D4D]">
              +91
            </span>
            <input
              name="mobileNumber"
              type="tel"
              maxLength={10}
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
              className="flex-1 h-16 bg-[#F8F8F8] border rounded-r-md px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Org type */}
        <div className="my-6">
          <h2 className="text-2xl">Type of Organization</h2>
          <p className="text-sm mb-3">Choose one:</p>

          <div className="grid grid-cols-[repeat(auto-fill,minmax(228px,1fr))] gap-3">
            {TYPE_OPTIONS.map(({ id, label, iconSrc }) => {
              const isSelected = selectedOrgType === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setSelectedOrgType(id)}
                  className={`flex items-center gap-2 px-4 py-3 border rounded transition
                              ${isSelected
                                ? "border-black bg-gray-50 ring-2 ring-black"
                                : "border-gray-300 hover:border-black"}`}
                >
                  <img src={iconSrc} alt={label} className="w-6 h-6 object-contain" />
                  <span className="text-sm">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interests */}
        <div className="my-6">
          <h2 className="text-2xl">Area of Interest</h2>
          <p className="text-sm mb-3">You can select more than one</p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INTEREST_OPTIONS.map(({ id, label, iconSrc }) => {
              const selected = selectedInterestTypes.includes(id);
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() =>
                    setSelectedInterestTypes((prev) =>
                      selected ? prev.filter((x) => x !== id) : [...prev, id],
                    )
                  }
                  className={`flex w-full items-center gap-3 rounded border px-5 py-3 text-left transition
                              ${selected
                                ? "border-black bg-gray-50 ring-2 ring-black"
                                : "border-gray-300 hover:border-black"}`}
                >
                  <img src={iconSrc} alt={label} className="h-6 w-6 object-contain" />
                  <span className="text-sm">{label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* message */}
        <h2 className="text-2xl mb-4">Message / Proposal (Optional)</h2>
        <RenderInput
          label="Share any brief proposal or interest point"
          name="description"
          type="text"
          placeholder="Write here"
          isTextarea
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        />

        <Button
          type="submit"
          text={loading ? "Submitting..." : "Submit"}
          disabled={loading}
          className="mt-8 w-full max-w-xs"
        />
      </form>
    </section>
  );
}
