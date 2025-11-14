export interface IBlogData {
  id: number;
  createdAt: string;
  active: boolean;
  title: string;
  description: string;
  content: string;
  categoryId: number;
  imageId: number;
  authorId: number;
  slug: string;
  nameTsv: any;
  author: IAuthor;
  category: ICategory;
  image: IImage;
}

export interface IAuthor {
  id: number;
  createdAt: string;
  email: string;
  verified: boolean;
  role: string;
  firstName: string;
  image_url: any;
  lastName: string;
  stripeCustomerId: any;
}

export interface ICategory {
  id: number;
  createdAt: string;
  name: string;
  slug: string;
  description: string;
}

export interface IImage {
  id: number;
  createdAt: string;
  path: string;
  filename: string;
  mime: string;
}
