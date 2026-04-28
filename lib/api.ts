import axios from "axios";

export const api = axios.create({
  baseURL: "https://biiliiBackend.eba-phvqmhxm.eu-north-1.elasticbeanstalk.com/api",
});

console.log("API URL =", process.env.NEXT_PUBLIC_API_URL);
//console.log("API URL =", process.env.NEXT_PUBLIC_API_URL);
api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
 //   const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjExNzI3MyIsInVzZXJJZCI6Nywicm9sZSI6IlVTRVIiLCJpYXQiOjE3NzY1ODg5MTAsImV4cCI6MTc3NjY3NTMxMH0.GHPfRKq86f6x8jsUfSbxCim1AMTMfRDXg-oqpZ417aQ";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});