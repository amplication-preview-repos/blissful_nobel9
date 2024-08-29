import { PayrollRecordWhereUniqueInput } from "../payrollRecord/PayrollRecordWhereUniqueInput";

export type PaySlipUpdateInput = {
  employee?: string | null;
  issuedAt?: Date | null;
  payrollRecord?: PayrollRecordWhereUniqueInput | null;
};
