import { Faq as TFaq } from "../api/faq/Faq";

export const FAQ_TITLE_FIELD = "category";

export const FaqTitle = (record: TFaq): string => {
  return record.category?.toString() || String(record.id);
};
