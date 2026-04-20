export type AdImage = {
  id?: number;
  imageUrl: string;
  isCover?: boolean;
  sortOrder?: number;
};

export type Ad = {
  id: number;
  title: string;
  description?: string;
  price: number | string;
  cityName?: string;
  categoryName?: string;
  images?: AdImage[];
};