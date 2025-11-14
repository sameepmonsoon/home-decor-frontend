export interface IBlogDetailResponse {
  blog: Blog;
  message: string;
}

export interface Blog {
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
  nameTsv: string;
  category: ICategory;
  image: IImage;
}

export interface ICategory {
  id: number;
  createdAt: string;
  name: string;
  slug: string;
  description: string;
}

interface IImage {
  id: number;
  createdAt: string;
  path: string;
  filename: string;
  mime: string;
}
