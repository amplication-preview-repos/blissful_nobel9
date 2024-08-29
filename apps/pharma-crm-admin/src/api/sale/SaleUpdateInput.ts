import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type SaleUpdateInput = {
  client?: ClientWhereUniqueInput | null;
  date?: Date | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
