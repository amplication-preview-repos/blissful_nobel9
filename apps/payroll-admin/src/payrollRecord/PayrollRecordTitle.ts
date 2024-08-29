import { PayrollRecord as TPayrollRecord } from "../api/payrollRecord/PayrollRecord";

export const PAYROLLRECORD_TITLE_FIELD = "id";

export const PayrollRecordTitle = (record: TPayrollRecord): string => {
  return record.id?.toString() || String(record.id);
};
