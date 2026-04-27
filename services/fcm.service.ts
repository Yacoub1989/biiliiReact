"use client";

import { getToken, onMessage } from "firebase/messaging";
import { getFirebaseMessaging } from "@/lib/firebase";
import { api } from "@/lib/api";

export async function requestNotificationPermissionAndToken() {
  if (typeof window === "undefined") return null;

  const permission = await Notification.requestPermission();

  if (permission !== "granted") {
    console.log("Permission notification refusée");
    return null;
  }

  const messaging = await getFirebaseMessaging();
  if (!messaging) {
    console.log("FCM non supporté sur ce navigateur");
    return null;
  }

  const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");

  const token = await getToken(messaging, {
    vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: registration,
  });

  if (!token) {
    console.log("Aucun token FCM récupéré");
    return null;
  }

  console.log("FCM TOKEN =", token);

  await api.post("/devices/register-token", {
    token,
    platform: "WEB",
  });

  return token;
}

export async function listenForegroundMessages() {
  const messaging = await getFirebaseMessaging();
  if (!messaging) return;

  onMessage(messaging, (payload) => {
    console.log("Foreground message:", payload);

    const title = payload.notification?.title || "Nouvelle notification";
    const body = payload.notification?.body || "";

    if (Notification.permission === "granted") {
      new Notification(title, {
        body,
        icon: "/icon-192.png",
      });
    }
  });
}