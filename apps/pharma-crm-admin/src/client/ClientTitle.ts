import { Client as TClient } from "../api/client/Client";

export const CLIENT_TITLE_FIELD = "firstName";

export const ClientTitle = (record: TClient): string => {
  return record.firstName?.toString() || String(record.id);
};
