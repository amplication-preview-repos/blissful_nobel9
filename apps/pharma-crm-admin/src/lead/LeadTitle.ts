import { Lead as TLead } from "../api/lead/Lead";

export const LEAD_TITLE_FIELD = "name";

export const LeadTitle = (record: TLead): string => {
  return record.name?.toString() || String(record.id);
};
