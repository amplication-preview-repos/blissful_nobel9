import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeEngagementServiceBase } from "./base/employeeEngagement.service.base";

@Injectable()
export class EmployeeEngagementService extends EmployeeEngagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
