import { Client } from "../client/Client";
import { Product } from "../product/Product";

export type Sale = {
  client?: Client | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
