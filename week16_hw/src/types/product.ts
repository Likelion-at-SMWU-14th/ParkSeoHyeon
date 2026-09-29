export type ProductCategory = "clothes" | "shoes" | "accessories";

export type ProductFilter = "all" | ProductCategory;

export interface Product {
  readonly id: number;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  image: string;
  description: string;
}
