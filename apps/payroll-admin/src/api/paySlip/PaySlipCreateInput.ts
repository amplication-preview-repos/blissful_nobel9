import { PayrollRecordWhereUniqueInput } from "../payrollRecord/PayrollRecordWhereUniqueInput";

export type PaySlipCreateInput = {
  employee?: string | null;
  issuedAt?: Date | null;
  payrollRecord?: PayrollRecordWhereUniqueInput | null;
};
