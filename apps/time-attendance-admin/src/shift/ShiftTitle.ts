import { Shift as TShift } from "../api/shift/Shift";

export const SHIFT_TITLE_FIELD = "name";

export const ShiftTitle = (record: TShift): string => {
  return record.name?.toString() || String(record.id);
};
