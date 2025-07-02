import { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { toast } from "sonner";

import RenderInput from "@/Pages/Components/RenderInput";
import Button from "@/Pages/Components/Button";
import VerificationCode from "@/Pages/Components/VerificationCard";
import ThankYou from "@/Pages/Components/ThankYou";
import useOtp from "@/Hooks/useOtp";

/* 🔗  ICON FILES  ───────────────────────────────────────────── */
import titleIcon   from "@/assets/Icons/SponsorForm/img1.png";
import zoneIcon    from "@/assets/Icons/SponsorForm/img2.png";
import merchIcon   from "@/assets/Icons/SponsorForm/img3.png";
import digitalIcon from "@/assets/Icons/SponsorForm/img4.png";
import csrIcon     from "@/assets/Icons/SponsorForm/img5.png";
import otherIcon   from "@/assets/Icons/SponsorForm/img6.png";

interface SponsorType {
  id: string;
  label: string;
  src: string;
}

const TYPE_OPTIONS: SponsorType[] = [
  { id: "title",       label: "Title Sponsor",       src: titleIcon },
  { id: "zone",        label: "Zone Sponsor",        src: zoneIcon  },
  { id: "merchandise", label: "Merchandise Sponsor", src: merchIcon },
  { id: "digital",     label: "Digital Sponsor",     src: digitalIcon },
  { id: "csr",         label: "CSR Initiative",      src: csrIcon   },
  { id: "others",      label: "Others",              src: otherIcon },
];

const SponsorForm = () => {
  /* ─── form state ─────────────────────────────────────────── */
  const [organizationName, setOrganizationName] = useState("");
  const [contactPersonName, setContactPersonName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [customType, setCustomType] = useState("");

  /* ─── ui helpers ─────────────────────────────────────────── */
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showCustomInput, setShowCustomInput] = useState(false);

  /* ─── OTP hook ───────────────────────────────────────────── */
  const {
    otpSent,
    verified,
    verifying,
    error: otpError,
    sendOtp,
    verifyOtp,
    reset: resetOtp,
  } = useOtp();

  /* ─── validation helpers ────────────────────────────────── */
  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const validateName = (v: string) => v.length >= 2 && /^[a-zA-Z\s]+$/.test(v);
  const validateOrg  = (v: string) => v.trim().length >= 3;

  /* ─── field handlers ─────────────────────────────────────── */
  const handleMobileChange = (e: ChangeEvent<HTMLInputElement>) =>
    setMobileNumber(e.target.value.replace(/\D/g, "").slice(0, 10));

  const toggleType = (id: string) =>
    setSelectedTypes((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );

  /* ─── submit ─────────────────────────────────────────────── */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateOrg(organizationName))
      return toast.error("Organisation name ≥ 3 characters");
    if (!validateName(contactPersonName))
      return toast.error("Contact name ≥ 2 letters");
    if (!validateEmail(email))
      return toast.error("Invalid email address");
    if (mobileNumber.length !== 10)
      return toast.error("Enter a valid 10-digit mobile number");
    if (selectedTypes.length === 0)
      return toast.error("Select at least one sponsorship type");

    try {
      setLoading(true);
      await axios.post(
        "https://hswf.network/api/sponsor/enquiry",
        {
          organisation_name: organizationName,
          name: contactPersonName,
          phone: mobileNumber,
          email,
          type: selectedTypes,
          query: message,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success("Your inquiry has been submitted successfully!");
      setShowThankYou(true);

      // clear form
      setOrganizationName("");
      setContactPersonName("");
      setEmail("");
      setMobileNumber("");
      setSelectedTypes([]);
      setMessage("");
      setCustomType("");
    } catch {
      toast.error("Submission failed – please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ─── early return : Thank-You card ─────────────────────── */
  if (showThankYou) {
    return (
      <ThankYou
        onClose={() => setShowThankYou(false)}
        title="For Showing Interest in Partnering with BOS!"
        subtitle="Our team will reach out within 3–5 working days."
      />
    );
  }

  /* ─── early return : OTP screen (before verified) ───────── */


      {/* 📱 phone-number card – same design as main form */}
  /* ─── early return : OTP screen (before verified) ───────── */
if (!verified) {
  return (
    <>
      {/* OTP modal */}
      {otpSent && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/30">
          <VerificationCode
            phoneNumber={`+91 ${mobileNumber}`}
            onVerify={(otp) => verifyOtp(mobileNumber, otp)}
            onResend={() => sendOtp(mobileNumber)}
            onChangeNumber={() => {
              resetOtp();
              setMobileNumber("");
            }}
            loading={verifying}
            error={otpError}
          />
        </div>
      )}

      {/* 📱 phone-number card – SAME outer measurements as main form */}
      <section className="mt-[60px] mb-[60px] flex justify-center">
        <div className="w-full max-w-[1136px] bg-white px-8 py-10 md:px-16 md:py-14 shadow-sm shadow-gray-200">
          {/* heading */}
          <h1 className="text-left text-[#090909] font-semibold  mb-4 text-[54px] md:text-[54px]">
            Sponsor Inquiry
          </h1>

          <p className="text-left text-[20px] text-[#000000] font-normal mb-4">
            Please enter a 10-digit mobile number to receive OTP
          </p>

          {/* floating-label input */}
          <div className="relative w-full mx-auto mb-5">
            <label
              htmlFor="mobileNumber"
              className="absolute -top-2 left-2 bg-white px-1 text-sm text-black"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>

            <div className="flex">
              <span className="flex items-center px-3 h-[68px] bg-[#F8F8F8] border border-[#F8F8F8] rounded-l-md text-[#4D4D4D] text-[20px]">
                +91
              </span>
              <input
                id="mobileNumber"
                type="tel"
                maxLength={10}
                placeholder="Enter Mobile Number"
                value={mobileNumber}
                onChange={handleMobileChange}
                className="flex-1 h-[68px] px-4 bg-[#F8F8F8] border border-l-0 border-[#F8F8F8] rounded-r-md focus:outline-none text-[20px] text-[#4b5563] placeholder:text-[#4D4D4D]"
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 text-left">
            <Button
              text={verifying ? "Sending OTP…" : "Generate OTP"}
              type="button"
              disabled={mobileNumber.length !== 10 || verifying}
              onClick={() => sendOtp(mobileNumber)}
              className="px-16 py-4 text-xl md:text-2xl"
            />
          </div>
        </div>
      </section>
    </>
  );
}


  /* ─── main form (after OTP verified) ─────────────────────── */
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] flex items-start justify-center pt-16 pb-24">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1136px] bg-white px-8 py-10 md:px-16 md:py-14"
      >
        {/* Title */}
        <h1 className="text-[40px] md:text-[54px] font-bold mb-10">
          Sponsor Inquiry
        </h1>

        {/* ─── Organisation Information ─── */}
        <section className="space-y-6 mb-10">
          <h2 className="text-lg md:text-xl font-semibold">
            Organisation Information
          </h2>

          <RenderInput
            label="Organisation / Brand Name"
            name="organisation"
            placeholder="Enter Organization / Brand Name"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />

          <RenderInput
            label="Contact Person Name"
            name="contactName"
            placeholder="Enter Contact Person Name"
            value={contactPersonName}
            onChange={(e) => setContactPersonName(e.target.value)}
          />

          <RenderInput
            label="Email"
            name="email"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* read-only verified phone */}
          <div className="relative w-full mx-auto mb-5">
            <label
              htmlFor="mobileNumber"
              className="absolute -top-2 left-2 px-1 text-sm bg-white text-black"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <span className="flex items-center px-3 h-[68px] bg-[#F8F8F8] border border-[#F8F8F8] rounded-l-md text-gray-700">
                +91
              </span>
              <input
                id="mobileNumber"
                readOnly
                value={mobileNumber}
                className="flex-1 h-[68px] px-4 bg-[#F8F8F8] border border-l-0 border-[#F8F8F8] rounded-r-md text-lg text-gray-700"
              />
            </div>
          </div>
        </section>

        {/* ─── Sponsorship Type ─── */}
        <section className="space-y-3 mb-10">
          <h2 className="text-lg md:text-xl font-semibold">
            Preferred Sponsorship Type
          </h2>
          <p className="text-sm text-gray-600">Select one or more:</p>

          <div className="flex flex-wrap gap-3">
            {TYPE_OPTIONS.map(({ id, label, src }) => (
              <button
                key={id}
                type="button"
                onClick={() => {
                  if (id === "others") {
                    setShowCustomInput(true);
                  } else {
                    toggleType(id);
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2 border rounded ${
                  selectedTypes.includes(id)
                    ? "border-black bg-gray-50"
                    : "border-[#E4E4E4] bg-white hover:border-black"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                />
                <span className="text-sm md:text-base">{label}</span>
              </button>
            ))}
          </div>

          {/* custom input for “Others” */}
          {showCustomInput && (
            <div className="flex flex-wrap items-end gap-3">
              <input
                type="text"
                value={customType}
                onChange={(e) => setCustomType(e.target.value)}
                placeholder="Enter Sponsorship Type"
                className="flex-1 h-12 rounded border border-[#E4E4E4] bg-[#F8F8F8] px-4 text-gray-700 text-sm focus:outline-none"
              />
              <Button
                text="Add"
                type="button"
                className="px-8 py-2 text-sm"
                disabled={!customType.trim()}
                onClick={() => {
                  const t = customType.trim();
                  if (t && !selectedTypes.includes(t)) {
                    setSelectedTypes([...selectedTypes, t]);
                  }
                  setCustomType("");
                  setShowCustomInput(false);
                }}
              />
            </div>
          )}

          {/* selected chips */}
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedTypes.map((t) => (
              <span
                key={t}
                className="flex items-center gap-1 px-3 py-1 border border-black rounded"
              >
                {TYPE_OPTIONS.find((opt) => opt.id === t)?.label || t}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedTypes(selectedTypes.filter((x) => x !== t))
                  }
                  className="text-lg leading-none"
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </section>

        {/* ─── Message / Query ─── */}
        <section className="mb-16">
          <h2 className="text-lg md:text-xl font-semibold mb-3">
            Message / Query
          </h2>
          <RenderInput
            label="Share any Sponsor inquiry"
            name="message"
            isTextarea
            placeholder="Write here…."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
          />
        </section>

        {/* ─── Submit ─── */}
        <Button
          type="submit"
          text={loading ? "Submitting…" : "Submit"}
          disabled={loading}
          className="text-xl md:text-2xl px-16 py-4"
        />
      </form>
    </div>
  );
};

export default SponsorForm;
