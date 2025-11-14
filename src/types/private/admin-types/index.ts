// orders
export type AdminOrderStatus = 'delivered' | 'processing' | 'cancelled';
export type PaymentStatus = 'paid' | 'pending' | 'cancelled';

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface AdminOrder {
  id: string;
  customer: string;
  date: string;
  total: number;
  paymentStatus: PaymentStatus;
  fulfillmentStatus: AdminOrderStatus;
  items: OrderItem[];
  email: string;
  phone: string;
  address: string;
  slug: string;
}

// products
export type AdminProductStatus = 'active' | 'inactive';
export interface AdminProduct {
  id: string;
  name: string;
  createdAt: string;
  deletedAt?: string;
  price: number;
  image: string;
  category: string;
  slug: string;
  status: AdminProductStatus;
}

// blogs
export interface AdminBlogs {
  id: number;
  title: string;
  description: string;
  content: string;
  imageId: number;
  image: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  category: string;
  categoryId: number;
  slug: string;
}
// marketing users
export interface MarketingUsers {
  id: number;
  name: string;
  imageId: number;
  image: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  role: string;
  slug: string;
}
