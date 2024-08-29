import { TrainingWhereInput } from "./TrainingWhereInput";
import { TrainingOrderByInput } from "./TrainingOrderByInput";

export type TrainingFindManyArgs = {
  where?: TrainingWhereInput;
  orderBy?: Array<TrainingOrderByInput>;
  skip?: number;
  take?: number;
};
