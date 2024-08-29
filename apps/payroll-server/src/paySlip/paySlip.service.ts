import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PaySlipServiceBase } from "./base/paySlip.service.base";

@Injectable()
export class PaySlipService extends PaySlipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
