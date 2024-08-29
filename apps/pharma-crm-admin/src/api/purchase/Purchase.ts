import { Product } from "../product/Product";

export type Purchase = {
  createdAt: Date;
  date: Date | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  supplier: string | null;
  updatedAt: Date;
};
