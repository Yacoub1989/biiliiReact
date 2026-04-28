import { Ad } from "@/app/types/ad";

export function toAbsoluteImageUrl(url?: string): string {
  if (!url) return "";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const apiBase =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8888/api";

  const backendBase = apiBase.replace("/api", "");

  return `${backendBase}${url}`;
}

export function getAdMainImage(ad: Ad): string {
  if (!ad.images || ad.images.length === 0) {
    return "";
  }

  const cover = ad.images.find((img) => img.isCover);
  const imagePath = cover?.imageUrl || ad.images[0].imageUrl;

  return toAbsoluteImageUrl(imagePath);
}

export function formatPrice(price: number | string): string {
  if (price === null || price === undefined || price === "") {
    return "Prix sur demande";
  }

  const numericPrice =
    typeof price === "string" ? Number(price) : price;

  if (Number.isNaN(numericPrice)) {
    return String(price);
  }

  return `${numericPrice.toLocaleString("fr-FR")} MRU`;
}