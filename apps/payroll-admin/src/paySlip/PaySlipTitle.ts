import { PaySlip as TPaySlip } from "../api/paySlip/PaySlip";

export const PAYSLIP_TITLE_FIELD = "employee";

export const PaySlipTitle = (record: TPaySlip): string => {
  return record.employee?.toString() || String(record.id);
};
