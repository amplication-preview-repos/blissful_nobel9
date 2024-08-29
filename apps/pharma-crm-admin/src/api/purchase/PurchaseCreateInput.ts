import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PurchaseCreateInput = {
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  supplier?: string | null;
};
