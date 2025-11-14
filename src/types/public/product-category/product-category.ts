export interface Category {
  id: number;
  createdAt: string; // ISO date string
  name: string;
  parent_id: number | null;
  slug: string;
  description: string;

  // Recursive relationship
  parent?: Category | null;
  children?: Category[];
}
