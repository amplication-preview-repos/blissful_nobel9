import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuotationServiceBase } from "./base/quotation.service.base";

@Injectable()
export class QuotationService extends QuotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
