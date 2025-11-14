export interface IProductResponse {
  id: number;
  createdAt: string;
  name: string;
  tag: string;
  description: string;
  categoryId: number;
  quantity: number;
  featured: boolean;
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
  mainImageId: number;
  nameTsv: string;
  category: ICategory;
  variants: IVariant[];
  images: IImage[];
  mainImage: IImage;
}

interface IDimensions {
  depth: string;
  width: string;
  height: string;
  weight: string;
  seatHeight: string;
}
interface ICategory {
  id: number;
  createdAt: string;
  name: string;
  parent_id: any;
  slug: string;
  description: string;
  parent: any;
  children: any[];
}

interface IVariant {
  id: number;
  createdAt: string;
  image: IImage;
  color: IColor;
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
