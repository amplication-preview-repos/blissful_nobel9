import { Purchase } from "../purchase/Purchase";
import { Quotation } from "../quotation/Quotation";
import { Sale } from "../sale/Sale";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  purchases?: Array<Purchase>;
  quotations?: Array<Quotation>;
  sales?: Array<Sale>;
  updatedAt: Date;
};
