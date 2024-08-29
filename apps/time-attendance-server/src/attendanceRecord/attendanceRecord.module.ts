import { Module } from "@nestjs/common";
import { AttendanceRecordModuleBase } from "./base/attendanceRecord.module.base";
import { AttendanceRecordService } from "./attendanceRecord.service";
import { AttendanceRecordController } from "./attendanceRecord.controller";
import { AttendanceRecordResolver } from "./attendanceRecord.resolver";

@Module({
  imports: [AttendanceRecordModuleBase],
  controllers: [AttendanceRecordController],
  providers: [AttendanceRecordService, AttendanceRecordResolver],
  exports: [AttendanceRecordService],
})
export class AttendanceRecordModule {}
