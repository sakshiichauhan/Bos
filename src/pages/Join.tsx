import { useState } from "react";
import { toast } from 'sonner';
import axios from 'axios';
import Footer from "@/components/Layouts/Footer";
import WhatYouGet from "@/Pages/Components/WhatYouGet";
import Appbar from '@/components/Layouts/Navbar';
import useOtp from '@/Hooks/useOtp';

import VerificationCode from '@/Pages/Components/VerificationCard';
import ThankYou from '@/Pages/Components/ThankYou';
import PlayerIcon from '@/assets/Form/Join/Player.png';
import VolunteerIcon from '@/assets/Form/Join/Volunteer.png';
import OrganizerIcon from '@/assets/Form/Join/Organizer.png';
import ContentIcon from '@/assets/Form/Join/Content.png';
import SupporterIcon from '@/assets/Form/Join/Supporter.png';

import men from '@/assets/Form/men.png';
import female from '@/assets/Form/woman.png';
import other from '@/assets/Form/other.png';
import menR from '@/assets/Form/menR.png';
import femaleR from '@/assets/Form/womanR.png';
import otherR from '@/assets/Form/otherR.png';

import Target from '@/assets/Form/Join/Target.png';
import wa from '@/assets/Form/Join/w1.png';

/* ---------- helpers / types ---------- */
const JOIN_AS_OPTIONS = [
  { id: 'player', label: 'Player', icon: PlayerIcon },
  { id: 'volunteer', label: 'Volunteer', icon: VolunteerIcon },
  { id: 'organizer', label: 'Organizer', icon: OrganizerIcon },
  { id: 'content_creator', label: 'Content Creator', icon: ContentIcon },
  { id: 'supporter', label: 'Supporter', icon: SupporterIcon },
] as const;
export type JoinRole = typeof JOIN_AS_OPTIONS[number]['id'];

interface FormState {
  name: string;
  dob: string;
  locality: string;
  email: string;
  gender: 'male' | 'female' | 'other';
  joinAs: JoinRole[];
}

const initialForm: FormState = {
  name: '',
  dob: '',
  locality: '',
  email: '',
  gender: 'male',
  joinAs: [],
};

/* ============================================================
   tiny reusable input component
   ============================================================ */
const TextInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ label, className = '', required, ...rest }) => (
  <label className="flex flex-col gap-1 w-full">
    <span className="font-medium">
      {label}
      {required && <span className="text-red-600">*</span>}
    </span>
    <input
      {...rest}
      required={required}
      className={`w-full rounded-md border border-gray-300 px-4 py-3 outline-none
        focus:border-red-600 focus:ring-1 focus:ring-red-600 ${className}`}
    />
  </label>
);

/* ============================================================
   OTP section (mobile + generate button)
   ============================================================ */
interface OTPProps {
  mobileNumber: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenerate: () => void;
  loading: boolean;
  error?: string;
}

const OTPSection: React.FC<OTPProps> = ({
  mobileNumber,
  onChange,
  onGenerate,
  loading,
  error,
}) => (
  <section className="border border-gray-200 rounded-lg p-8 mx-auto mt-10 w-full max-w-3xl">
    <h1 className="text-3xl font-semibold mb-8">Join the Movement</h1>

    <p className="mb-10 text-lg">
      Please enter a 10-digit valid mobile number to receive OTP
    </p>

    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <span className="shrink-0 text-lg font-medium">+91</span>
      <TextInput
        id="mobileNumber"
        type="tel"
        maxLength={10}
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChange={onChange}
        required
        className="flex-1"
      />
    </div>

    {error && <p className="text-red-600 font-medium mb-4">{error}</p>}

    <button
      type="button"
      onClick={onGenerate}
      disabled={loading || !/^\d{10}$/.test(mobileNumber)}
      className="w-full sm:w-auto px-8 py-3 rounded-md text-xl font-semibold text-white
        bg-gradient-to-r from-red-500 to-red-700 disabled:opacity-50
        disabled:cursor-not-allowed"
    >
      {loading ? 'Sending OTP…' : 'Generate OTP'}
    </button>
  </section>
);

/* ============================================================
   Join form (after OTP verified)
   ============================================================ */
interface JoinFormProps {
  form: FormState;
  onChange: (k: keyof FormState, v: string | string[]) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  success: boolean;
  error: string;
}

const genderImages = { male: men, female: female, other: other } as const;
const genderImagesSelected = { male: menR, female: femaleR, other: otherR } as const;

const JoinForm: React.FC<JoinFormProps> = ({
  form,
  onChange,
  onSubmit,
  loading,
  success,
  error,
}) => (
  <section className="py-10">
    <div className="border border-gray-200 rounded-lg p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Fill in your details</h1>

      <form onSubmit={onSubmit} className="space-y-8">
        {/* name + gender */}
        <div className="grid md:grid-cols-2 gap-4">
          <TextInput
            label="Full name"
            placeholder="Enter your name"
            value={form.name}
            onChange={e => onChange('name', e.target.value)}
            required
          />

          <div>
            <span className="font-medium">
              Gender<span className="text-red-600">*</span>
            </span>
            <div className="flex gap-6 mt-2">
              {(['male', 'female', 'other'] as const).map(g => (
                <button
                  key={g}
                  type="button"
                  onClick={() => onChange('gender', g)}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-md
                    border ${
                      form.gender === g ? 'border-red-600' : 'border-gray-300'
                    }`}
                >
                  <img
                    src={form.gender === g ? genderImagesSelected[g] : genderImages[g]}
                    alt={g}
                    className="h-14 w-14"
                  />
                  <span
                    className={`font-medium ${
                      form.gender === g ? 'text-red-600' : ''
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
        <div className="grid md:grid-cols-2 gap-4">
          <TextInput
            label="DOB"
            type="date"
            value={form.dob}
            max={new Date().toISOString().split('T')[0]}
            onChange={e => onChange('dob', e.target.value)}
            required
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={e => onChange('email', e.target.value)}
          />
        </div>

        {/* locality */}
        <TextInput
          label="Locality"
          placeholder="Enter Your Society Name (As Listed On Google Maps)"
          value={form.locality}
          onChange={e => onChange('locality', e.target.value)}
        />

        {/* join-as */}
        <div>
          <span className="font-medium mb-2 inline-block">Join BOS as</span>
          <div className="flex flex-wrap gap-4">
            {JOIN_AS_OPTIONS.map(({ id, label, icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => onChange('joinAs', [id])}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-md
                  border ${
                    form.joinAs.includes(id) ? 'border-red-600' : 'border-gray-300'
                  }`}
              >
                <img src={icon} alt={label} className="h-14 w-auto" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* notes */}
        <p className="flex items-center gap-2 text-gray-700">
          <img src={wa} alt="whatsapp" className="w-5 h-5" />
          Confirmation and event kit details will be shared via email/WhatsApp
        </p>

        <button
          type="submit"
          disabled={loading}
          className="px-12 py-4 text-xl font-semibold text-white rounded-md
            bg-gradient-to-r from-red-500 to-red-700 shadow-md
            disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting…' : 'Submit'}
        </button>

        <p className="flex items-center gap-2 font-semibold mt-6 text-lg">
          <img src={Target} alt="target" className="w-5 h-5" />
          Don&apos;t miss your chance to be part of something bigger than the game.
        </p>

        {success && (
          <p className="text-green-600 font-medium">Form submitted successfully!</p>
        )}
        {error && <p className="text-red-600 font-medium">{error}</p>}
      </form>
    </div>
  </section>
);



const Information: React.FC = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto max-w-5xl px-4 text-center space-y-6">
      <h1 className="text-4xl font-bold">Join the Movement</h1>
      <h2 className="text-2xl font-semibold text-gray-800">
        Be more than just a spectator — be the spirit of the game.
      </h2>
      <p className="text-lg tracking-wide text-gray-700">
        Join hundreds of passionate individuals coming together to celebrate
        heritage, sportsmanship, and community pride. Whether you&apos;re playing,
        volunteering, organizing, or just capturing the moments — you matter.
      </p>
    </div>
    <WhatYouGet />
  </section>
);

/* ============================================================
   main page component
   ============================================================ */
const Join: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [form, setForm] = useState<FormState>(initialForm);
  const [showThankYou, setShowThankYou] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset } =
    useOtp();

  /* ---------- OTP flow ---------- */
  const handleSendOtp = async () => {
    try {
      const url = 'https://hswf.network/api/send/otp';
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: mobileNumber }),
      });
      const data = await res.json();

      if (data?.status === 'error') {
        toast.error(data.message || 'Failed to send OTP. Please try again.');
      }

      if (data?.message === 'User Exists!') {
        toast.success('User exists in the system. You can proceed to fill the form.');
        if (data.data) {
          const joinAsArray: JoinRole[] = data.data.join_as
            ? data.data.join_as.split(',')
            : [];
          setForm({
            name: data.data.name ?? '',
            dob: data.data.dob ?? '',
            locality: data.data.address ?? '',
            email: data.data.email ?? '',
            gender: data.data.gender ?? 'male',
            joinAs: joinAsArray,
          });
        }
      } else {
        setForm(initialForm);
      }

      await sendOtp(mobileNumber);
    } catch {
      toast.error('Failed to send OTP. Please try again.');
    }
  };

  const handleVerify = async (otp: string) => {
    try {
      const userData = await verifyOtp(mobileNumber, otp);
      if (userData) {
        const joinAsArray: JoinRole[] = userData.join_as
          ? userData.join_as.split(',')
          : [];
        setForm({
          name: userData.name ?? '',
          dob: userData.dob ?? '',
          locality: userData.address ?? '',
          email: userData.email ?? '',
          gender: userData.gender ?? 'male',
          joinAs: joinAsArray,
        });
        toast.success('User exists in the system. You can proceed to fill the form.');
      }
    } catch {
      /* handled in hook */
    }
  };

  const handleChangeNumber = () => {
    reset();
    setShowThankYou(false);
    setForm(initialForm);
  };

  /* ---------- form setters ---------- */
  const setFormField = (field: keyof FormState, value: string | string[]) =>
    setForm(prev => ({ ...prev, [field]: value } as FormState));

  /* ---------- submit ---------- */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    /* Client-side DOB validation */
    const today = new Date();
    const dobDate = new Date(form.dob);
    const age =
      today.getFullYear() -
      dobDate.getFullYear() -
      (today < new Date(today.getFullYear(), dobDate.getMonth(), dobDate.getDate()) ? 1 : 0);

    if (dobDate > today) {
      toast.error('Date of birth cannot be in the future');
      return;
    }
    if (age < 14) {
      toast.error('You must be at least 14 years old to register');
      return;
    }

    setLoading(true);
    setSubmitError('');

    try {
      await axios.post(
        'https://hswf.network/api/register',
        {
          name: form.name,
          email: form.email,
          phone: mobileNumber,
          gender: form.gender,
          locality: form.locality,
          dob: form.dob,
          join_as: form.joinAs[0] ?? '',
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setSuccess(true);
      setShowThankYou(true);
    } catch (err: any) {
      const errMsg =
        err?.response?.data?.error
          ? Object.values(err.response.data.error).join(', ')
          : 'Failed to submit. Please try again.';
      setSubmitError(errMsg);
    } finally {
      setLoading(false);
    }
  };

  /* ---------- UI ---------- */
  return (
    <>
      <Appbar />

      {/* OTP entry */}
      {!otpSent && (
        <OTPSection
          mobileNumber={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)}
          onGenerate={handleSendOtp}
          loading={verifying}
          error={error}
        />
      )}

      {/* OTP verification modal */}
      {otpSent && !verified && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <VerificationCode
            phoneNumber={`+91 ${mobileNumber}`}
            onVerify={handleVerify}
            onResend={handleSendOtp}
            onChangeNumber={handleChangeNumber}
            loading={verifying}
            error={error}
          />
        </div>
      )}

      {/* main form */}
      {verified && !showThankYou && (
        <JoinForm
          form={form}
          onChange={setFormField}
          onSubmit={handleSubmit}
          loading={loading}
          success={success}
          error={submitError}
        />
      )}

      {/* thank-you card */}
      {showThankYou && (
        <ThankYou
          onClose={handleChangeNumber}
          title="For Registering with the BOS Community!"
          subtitle="We've received your registration details. Our team will get in touch with you shortly based on your selected participation type."
        />
      )}

      <Information />
      <Footer />
    </>
  );
};

export default Join;
