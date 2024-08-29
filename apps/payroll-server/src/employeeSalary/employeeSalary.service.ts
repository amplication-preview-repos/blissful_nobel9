import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmployeeSalaryServiceBase } from "./base/employeeSalary.service.base";

@Injectable()
export class EmployeeSalaryService extends EmployeeSalaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
