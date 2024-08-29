import { Purchase as TPurchase } from "../api/purchase/Purchase";

export const PURCHASE_TITLE_FIELD = "supplier";

export const PurchaseTitle = (record: TPurchase): string => {
  return record.supplier?.toString() || String(record.id);
};
