import { useState } from "react";
import axios from "axios";
import { OTP_SEND_URL, OTP_VERIFY_URL } from "../config";

export default function useOtp() {
  const [otpSent, setOtpSent] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const sendOtp = async (mobile: string) => {
    setError("");
    try {
      const url = `${OTP_SEND_URL}`;
      const res = await axios.post(
        url,
        { phone: mobile },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;

      if (!data.success) {
        setError(data?.message || "Failed to send OTP. Please try again.");
        return false;
      }
      setOtpSent(true);
      return true;
    } catch (e) {
      setError("Failed to send OTP. Please try again.");
      return false;
    }
  };

  const verifyOtp = async (mobile:string, otp:string) => {
    setVerifying(true);
    setError("");
    if (!/^\d{4}$/.test(otp)) {
      setError("Please enter a valid 4-digit OTP.");
      setVerifying(false);
      return false;
    }
    try {
      const url = `${OTP_VERIFY_URL}`;
      const [otp1, otp2, otp3, otp4] = otp.split("");
      const res = await axios.post(
        url,
        {
          phone: mobile,
          otp1,
          otp2,
          otp3,
          otp4,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;

      if (data.success) {
        setVerified(true);
        return data.data || null;
      } else {
        setError(data?.message || "Invalid OTP. Please try again.");
        return false;
      }
    } catch (e) {
      setError("Failed to verify OTP. Please try again.");
      return false;
    } finally {
      setVerifying(false);
    }
  };

  const reset = () => {
    setOtpSent(false);
    setVerified(false);
    setError("");
  };

  return { otpSent, verified, verifying, error, sendOtp, verifyOtp, reset };
}
