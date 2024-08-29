import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttendanceRecordService } from "./attendanceRecord.service";
import { AttendanceRecordControllerBase } from "./base/attendanceRecord.controller.base";

@swagger.ApiTags("attendanceRecords")
@common.Controller("attendanceRecords")
export class AttendanceRecordController extends AttendanceRecordControllerBase {
  constructor(protected readonly service: AttendanceRecordService) {
    super(service);
  }
}
