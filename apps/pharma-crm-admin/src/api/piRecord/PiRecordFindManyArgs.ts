import { PiRecordWhereInput } from "./PiRecordWhereInput";
import { PiRecordOrderByInput } from "./PiRecordOrderByInput";

export type PiRecordFindManyArgs = {
  where?: PiRecordWhereInput;
  orderBy?: Array<PiRecordOrderByInput>;
  skip?: number;
  take?: number;
};
