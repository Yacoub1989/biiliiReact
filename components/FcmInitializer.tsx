"use client";

import { useEffect } from "react";
import {
  listenForegroundMessages,
  requestNotificationPermissionAndToken,
} from "@/services/fcm.service";

export default function FcmInitializer() {
  useEffect(() => {
    const init = async () => {
      try {
        await requestNotificationPermissionAndToken();
        await listenForegroundMessages();
      } catch (error) {
        console.error("Erreur init FCM:", error);
      }
    };

    init();
  }, []);

  return null;
}