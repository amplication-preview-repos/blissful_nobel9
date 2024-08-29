import { Recruitment as TRecruitment } from "../api/recruitment/Recruitment";

export const RECRUITMENT_TITLE_FIELD = "position";

export const RecruitmentTitle = (record: TRecruitment): string => {
  return record.position?.toString() || String(record.id);
};
