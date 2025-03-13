"use client"

import { Button } from "@/components/ui/button"
import PhoneInput from 'react-phone-input-2'
import "react-phone-input-2/lib/style.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm1() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSendOTP = async () => {
    // Simulate API call to send OTP
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        body: JSON.stringify({ phone }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        router.push(`/otp?phone=${phone}`);
      } else {
        alert("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  return (
      <>
        <p className="mt-2 text-2xl font-semibold text-gray-800">
          Login with mobile number
        </p>
        <p className="text-md text-gray-500 text-center">
          Please confirm your country code and enter your mobile number
        </p>

        <PhoneInput
          country={"qa"}
          placeholder="12345678"
          value={phone}
          onChange={(value) => setPhone(value)}
          containerClass="w-full max-w-lg border rounded-lg px-3 py-2 mt-6 bg-white flex items-center"
          inputClass="!w-full border-none focus:ring-0 outline-none"
          buttonClass="!bg-transparent !border-none"
        />

        <Button className="w-full max-w-lg mt-4 new-booking-color hover:bg-orange-600 text-white" onClick={handleSendOTP}>
          Send OTP
        </Button>

        <button className="mt-4 text-uhs-secondary text-sm font-medium hover:underline">
          Try another way
        </button>
    </>
  )
}
