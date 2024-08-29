import { AttendanceRecord as TAttendanceRecord } from "../api/attendanceRecord/AttendanceRecord";

export const ATTENDANCERECORD_TITLE_FIELD = "employee";

export const AttendanceRecordTitle = (record: TAttendanceRecord): string => {
  return record.employee?.toString() || String(record.id);
};
