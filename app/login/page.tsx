"use client";

import { useState } from "react";
import { requestOtp, verifyOtp } from "@/services/auth.service";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"PHONE" | "OTP">("PHONE");

  const router = useRouter();

  const handleRequestOtp = async () => {
    await requestOtp(phone);
    setStep("OTP");
  };

  const handleVerifyOtp = async () => {
    await verifyOtp(phone, otp);
    router.push("/publier");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f6f7fb]">
      <div className="bg-white p-8 rounded-3xl shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Connexion OTP</h1>

        {step === "PHONE" && (
          <>
            <input
              placeholder="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button
              onClick={handleRequestOtp}
              className="w-full bg-orange-500 text-white p-3 rounded-lg"
            >
              Recevoir OTP
            </button>
          </>
        )}

        {step === "OTP" && (
          <>
            <input
              placeholder="Code OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-3 border rounded-lg mb-4"
            />

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-500 text-white p-3 rounded-lg"
            >
              Vérifier
            </button>
          </>
        )}
      </div>
    </div>
  );
}