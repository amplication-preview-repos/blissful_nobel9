import { PiRecord as TPiRecord } from "../api/piRecord/PiRecord";

export const PIRECORD_TITLE_FIELD = "issuedBy";

export const PiRecordTitle = (record: TPiRecord): string => {
  return record.issuedBy?.toString() || String(record.id);
};
