export interface ICartResponse {
  id: number;
  createdAt: string;
  cartId: number;
  productId: number;
  variantId: number;
  quantity: number;
  product: IProduct;
  variant: IVariant;
}

export interface IProduct {
  id: number;
  createdAt: string;
  name: string;
  description: string;
  categoryId: number;
  quantity: number;
  dimensions: IDimensions;
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
  nameTsv: string;
  images: IImage[];
}

export interface IDimensions {
  depth: string;
  width: string;
  height: string;
  weight: string;
  seatHeight: string;
}

interface IImage {
  id: number;
  createdAt: string;
  path: string;
  filename: string;
}

interface IVariant {
  id: number;
  createdAt: string;
  image: IImage;
}
