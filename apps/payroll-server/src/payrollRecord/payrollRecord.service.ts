import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayrollRecordServiceBase } from "./base/payrollRecord.service.base";

@Injectable()
export class PayrollRecordService extends PayrollRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
