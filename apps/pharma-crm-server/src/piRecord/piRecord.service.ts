import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PiRecordServiceBase } from "./base/piRecord.service.base";

@Injectable()
export class PiRecordService extends PiRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
