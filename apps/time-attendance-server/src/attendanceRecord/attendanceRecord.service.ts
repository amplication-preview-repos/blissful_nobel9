import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AttendanceRecordServiceBase } from "./base/attendanceRecord.service.base";

@Injectable()
export class AttendanceRecordService extends AttendanceRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
