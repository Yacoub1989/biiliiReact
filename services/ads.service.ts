import { api } from "@/lib/api";
import { Ad } from "@/app/types/ad";

export type CreateAdRequest = {
  categoryId: number;
  cityId : number;
  title: string;
  description: string;
  price: number;
  brand: string;
  model: string;
  conditionState: string;
  district: string;
  phoneContact: string;
  whatsappContact: string;
  voiceQueryText: string;
};

export async function createAd(payload: CreateAdRequest) {
  const response = await api.post("/ads", payload);
  return response.data;
}

export async function uploadAdImage(adId: number | string, file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await api.post(`/ads/${adId}/images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}


export async function getAds(): Promise<Ad[]> {
  const response = await api.get("/public/ads");
  return response.data;
}

export async function getAdById(id: string | number): Promise<Ad> {
  const response = await api.get(`/public/ads/${id}`);
  return response.data;
}




