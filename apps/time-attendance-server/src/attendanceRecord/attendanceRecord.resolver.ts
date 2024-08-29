import * as graphql from "@nestjs/graphql";
import { AttendanceRecordResolverBase } from "./base/attendanceRecord.resolver.base";
import { AttendanceRecord } from "./base/AttendanceRecord";
import { AttendanceRecordService } from "./attendanceRecord.service";

@graphql.Resolver(() => AttendanceRecord)
export class AttendanceRecordResolver extends AttendanceRecordResolverBase {
  constructor(protected readonly service: AttendanceRecordService) {
    super(service);
  }
}
