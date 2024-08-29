import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type PurchaseUpdateInput = {
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
  supplier?: string | null;
};
