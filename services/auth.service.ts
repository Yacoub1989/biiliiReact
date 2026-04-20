import { api } from "@/lib/api";

export async function requestOtp(phone: string) {
  return api.post("/auth/request-otp", { phone });
}

export async function verifyOtp(phone: string, code: string) {
  const res = await api.post("/auth/verify-otp", { phone, code });

  const token = res.data.token;

  localStorage.setItem("token", token);

  return res.data;
}