export type AttendanceRecord = {
  createdAt: Date;
  date: Date | null;
  employee: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
