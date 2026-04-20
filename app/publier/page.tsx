"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PublishPage from "./publishPage";

export default function PublishPageWrapper() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return <PublishPage />;
}