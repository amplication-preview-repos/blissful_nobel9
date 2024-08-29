import { Training as TTraining } from "../api/training/Training";

export const TRAINING_TITLE_FIELD = "name";

export const TrainingTitle = (record: TTraining): string => {
  return record.name?.toString() || String(record.id);
};
