export type OrderStatus = 'Delivered' | 'Processing' | 'Cancelled';

export interface OrderItem {
  name: string;
  image: string;
  quantity: number;
}

export interface Order {
  id: string;
  slug: string;
  date: string;
  status: OrderStatus;
  total: string;
  items: OrderItem[];
}
