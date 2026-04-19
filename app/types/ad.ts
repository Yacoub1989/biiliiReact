export type AdImage = {
  id?: number;
  url: string;
  isCover?: boolean;
};

export type Ad = {
  id: number;
  title: string;
  description?: string;
  price: number | string;
  city: string;
  images?: AdImage[];
  imageUrl?: string;
};