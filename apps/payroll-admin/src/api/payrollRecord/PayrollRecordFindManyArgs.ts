import { PayrollRecordWhereInput } from "./PayrollRecordWhereInput";
import { PayrollRecordOrderByInput } from "./PayrollRecordOrderByInput";

export type PayrollRecordFindManyArgs = {
  where?: PayrollRecordWhereInput;
  orderBy?: Array<PayrollRecordOrderByInput>;
  skip?: number;
  take?: number;
};
