import { Ad } from "@/types/ad";

export function getAdMainImage(ad: Ad): string {
  if (ad.imageUrl) return ad.imageUrl;

  if (ad.images && ad.images.length > 0) {
    const cover = ad.images.find((img) => img.isCover);
    return cover?.url || ad.images[0].url;
  }

  return "";
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