export interface IWishListResponse {
  id: number;
  createdAt: string;
  userId: number;
  productId: number;
  variantId: number;
  product: IProduct;
  variant: IVariant;
}

interface IProduct {
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

interface IImage {
  id: number;
  createdAt: string;
  path: string;
  filename: string;
  mime: string;
}

interface IDimensions {
  depth: string;
  width: string;
  height: string;
  weight: string;
  seatHeight: string;
}

interface IVariant {
  id: number;
  createdAt: string;
  image: IImage;
}
