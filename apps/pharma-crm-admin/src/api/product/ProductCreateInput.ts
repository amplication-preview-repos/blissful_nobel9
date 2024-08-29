import { PurchaseCreateNestedManyWithoutProductsInput } from "./PurchaseCreateNestedManyWithoutProductsInput";
import { QuotationCreateNestedManyWithoutProductsInput } from "./QuotationCreateNestedManyWithoutProductsInput";
import { SaleCreateNestedManyWithoutProductsInput } from "./SaleCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  price?: number | null;
  purchases?: PurchaseCreateNestedManyWithoutProductsInput;
  quotations?: QuotationCreateNestedManyWithoutProductsInput;
  sales?: SaleCreateNestedManyWithoutProductsInput;
};
