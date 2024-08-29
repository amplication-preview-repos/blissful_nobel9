import { PiRecord } from "../piRecord/PiRecord";
import { Product } from "../product/Product";

export type Quotation = {
  createdAt: Date;
  id: string;
  piRecords?: Array<PiRecord>;
  product?: Product | null;
  quantity: number | null;
  quotedPrice: number | null;
  updatedAt: Date;
  validUntil: Date | null;
};
