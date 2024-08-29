import { PurchaseUpdateManyWithoutProductsInput } from "./PurchaseUpdateManyWithoutProductsInput";
import { QuotationUpdateManyWithoutProductsInput } from "./QuotationUpdateManyWithoutProductsInput";
import { SaleUpdateManyWithoutProductsInput } from "./SaleUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  purchases?: PurchaseUpdateManyWithoutProductsInput;
  quotations?: QuotationUpdateManyWithoutProductsInput;
  sales?: SaleUpdateManyWithoutProductsInput;
};
