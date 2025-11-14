export interface IProductDetailResponse {
  product: IProduct;
  message: string;
}

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  tag: string;
  description: string;
  price: number;
  quantity: number;
  additionalData: IAdditionalData;
  variants: IVariant[];
  images: IImage2[];
  mainImage: IMainImage;
  category: ICategory;
}

interface IAdditionalData {
  dimensions: IDimensions;
  general: IGeneral;
  product: IProduct2;
  warranty: IWarranty;
}

interface IDimensions {
  depth: string;
  width: string;
  height: string;
  weight: string;
  seatHeight: string;
}

interface IGeneral {
  salesPackage: string;
  model: string;
  secondaryMaterial: string;
  configuration: string;
  upholsteryMaterial: string;
  upholsteryColor: string;
}

interface IProduct2 {
  fillingMaterial: string;
  finishType: string;
  adjustableHeadrest: boolean;
  maxLoad: number;
  originOfManufacture: string;
}

interface IWarranty {
  warrantySummary: string;
  warrantyServiceType: string;
  coveredInWarranty: string;
  notCoveredInWarranty: string;
  domesticWarranty: string;
}

interface IVariant {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  color: IColor;
  image: IImage;
  imageId: number;
}

interface IColor {
  id: number;
  createdAt: string;
  name: string;
  hexCode: string;
  description: string;
}

interface IImage {
  id: number;
  createdAt: string;
  path: string;
  filename: string;
  mime: string;
}

interface IImage2 {
  id: number;
  path: string;
  filename: string;
  mime: string;
}

interface ICategory {
  id: number;
  createdAt: string;
  name: string;
  parent_id: any;
  slug: string;
  description: string;
  parent: any;
  children: IChildren[];
}

interface IChildren {
  id: number;
  createdAt: string;
  name: string;
  parent_id: number;
  slug: string;
  description: string;
}

interface IMainImage {
  id: number;
  path: string;
  filename: string;
  mime: string;
}
