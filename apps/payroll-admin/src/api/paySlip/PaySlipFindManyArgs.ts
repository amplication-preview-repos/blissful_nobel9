import { PaySlipWhereInput } from "./PaySlipWhereInput";
import { PaySlipOrderByInput } from "./PaySlipOrderByInput";

export type PaySlipFindManyArgs = {
  where?: PaySlipWhereInput;
  orderBy?: Array<PaySlipOrderByInput>;
  skip?: number;
  take?: number;
};
