import OtpField from "@/components/OtpField";
import { Suspense } from "react";

export default function OTPPage() {

  return (
    <>
      <p className="mt-2 text-2xl font-semibold text-gray-800">
        Enter OTP
      </p>
      <p className="text-md text-gray-500 text-center">
        We have sent a OTP to your mobile number
      </p>
      
      <Suspense fallback={<p>Loading...</p>}>
        <OtpField />
      </Suspense>

      <button className="mt-4 text-sm font-sm hover:underline">
        {"Didn't receive code?"} <span className="text-uhs-secondary"> Resend OTP</span>
      </button>
    </>
  );
}
