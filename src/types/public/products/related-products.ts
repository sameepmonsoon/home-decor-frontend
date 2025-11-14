export interface IRelatedProductResponse {
  id: number;
  createdAt: string;
  name: string;
  tag: string;
  description: string;
  categoryId: number;
  quantity: number;
  featured: boolean;
  dimensions: Dimensions;
  modelNumber: string;
  secondaryMaterial: string;
  configuration: string;
  upholsteryMaterial: string;
  upholsteryColor: string;
  fillingMaterial: string;
  finishType: string;
  adjustableHeadrest: boolean;
  maxLoad: number;
  salesPackage: string;
  originOfManufacture: string;
  discountValue: number;
  discountStartDate: string;
  discountEndDate: string;
  warrantySummary: string;
  warrantyServiceType: string;
  coveredInWarranty: string;
  notCoveredInWarranty: string;
  domesticWarranty: string;
  slug: string;
  price: number;
  mainImageId?: number;
  nameTsv: string;
  category: Category;
  variants: Variant[];
  images: IImage[];
  mainImage?: IImage;
}

interface Dimensions {
  depth: string;
  width: string;
  height: string;
  weight: string;
  seatHeight: string;
}

interface Category {
  id: number;
  createdAt: string;
  name: string;
  parent_id: any;
  slug: string;
  description: string;
  parent: any;
  children: any[];
}

interface Variant {
  id: number;
  createdAt: string;
  image: IImage;
  color: Color;
}

interface IImage {
  id: number;
  createdAt: string;
  path: string;
  filename: string;
  mime: string;
}

interface Color {
  id: number;
  createdAt: string;
  name: string;
  hexCode: string;
  description: string;
}
