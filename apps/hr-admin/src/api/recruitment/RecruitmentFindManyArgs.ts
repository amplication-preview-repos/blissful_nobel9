import { RecruitmentWhereInput } from "./RecruitmentWhereInput";
import { RecruitmentOrderByInput } from "./RecruitmentOrderByInput";

export type RecruitmentFindManyArgs = {
  where?: RecruitmentWhereInput;
  orderBy?: Array<RecruitmentOrderByInput>;
  skip?: number;
  take?: number;
};
