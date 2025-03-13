"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

const OtpField = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";

  const handleVerifyOTP = async () => {
    const enteredOTP = otp.join("");

    // Simulate API call to verify OTP
    const response = await fetch("/api/verify-otp", {
      method: "POST",
      body: JSON.stringify({ phone, otp: enteredOTP }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      router.push("/");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <>
      <div className="flex gap-1">
          {otp.map((digit, index) => (
            <div key={index} className="relative mt-6">
            <input
              type="text"
              maxLength={1}
              className="w-10 h-10 border text-center text-lg font-bold rounded-md mx-2 bg-white"
              value={digit}
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[index] = e.target.value;
                setOtp(newOtp);
              }}
              />
            {index < otp.length - 1 && (
              <span className="text-xl font-semibold text-gray-400">
                -
              </span>
            )}
          </div>
          ))}
        </div>

      <Button className="w-full max-w-sm mt-4 new-booking-color hover:bg-orange-600 text-white" onClick={handleVerifyOTP}>
        Verify
      </Button>
      </>
  )
}
export default OtpField