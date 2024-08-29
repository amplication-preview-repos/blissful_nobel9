import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecruitmentServiceBase } from "./base/recruitment.service.base";

@Injectable()
export class RecruitmentService extends RecruitmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
