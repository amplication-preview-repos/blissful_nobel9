import { AttendanceRecordWhereInput } from "./AttendanceRecordWhereInput";
import { AttendanceRecordOrderByInput } from "./AttendanceRecordOrderByInput";

export type AttendanceRecordFindManyArgs = {
  where?: AttendanceRecordWhereInput;
  orderBy?: Array<AttendanceRecordOrderByInput>;
  skip?: number;
  take?: number;
};
