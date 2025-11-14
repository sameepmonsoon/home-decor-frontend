export interface Dimensions {
  height: number;
  width: number;
  depth: number;
  seatHeight?: number;
  weight?: number;
}

export interface Variant {
  color: string;
  size?: string;
  quantity: number;
  imageId?: number;
  dimensions: Dimensions;
}

export interface Product {
  name: string;
  description: string;
  modelNumber?: string;
  price: number;
  images?: number[];
  category: string;
  finishType?: string;
  adjustableHeadrest?: boolean;
  maxLoad?: number;
  warrantySummary?: string;
  salesPackage?: string;
  variants: Variant[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  status: 'active' | 'inactive';
  seo_title?: string;
}
