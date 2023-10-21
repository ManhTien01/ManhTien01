interface PriceOptionDto {
  color: string,
  size: string,
  price: number;
  discount: number;
  amount: Number,
  sold: Number,
}

export interface Product {
  name: string;
  description: string;
  avatar: string;
  origin: string;
  brand: string;
  category: string;
  subcategory: string;
  material: string,
  price: number;
  discount: number;
  amount: Number,
  sold: Number,
  colors: [string],
  sizes: [string],
  priceoption: PriceOptionDto[],
  images: [string],
}