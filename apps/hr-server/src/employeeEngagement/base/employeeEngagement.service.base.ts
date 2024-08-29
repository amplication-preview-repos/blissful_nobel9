/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EmployeeEngagement as PrismaEmployeeEngagement,
} from "@prisma/client";

export class EmployeeEngagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EmployeeEngagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.employeeEngagement.count(args);
  }

  async employeeEngagements(
    args: Prisma.EmployeeEngagementFindManyArgs
  ): Promise<PrismaEmployeeEngagement[]> {
    return this.prisma.employeeEngagement.findMany(args);
  }
  async employeeEngagement(
    args: Prisma.EmployeeEngagementFindUniqueArgs
  ): Promise<PrismaEmployeeEngagement | null> {
    return this.prisma.employeeEngagement.findUnique(args);
  }
  async createEmployeeEngagement(
    args: Prisma.EmployeeEngagementCreateArgs
  ): Promise<PrismaEmployeeEngagement> {
    return this.prisma.employeeEngagement.create(args);
  }
  async updateEmployeeEngagement(
    args: Prisma.EmployeeEngagementUpdateArgs
  ): Promise<PrismaEmployeeEngagement> {
    return this.prisma.employeeEngagement.update(args);
  }
  async deleteEmployeeEngagement(
    args: Prisma.EmployeeEngagementDeleteArgs
  ): Promise<PrismaEmployeeEngagement> {
    return this.prisma.employeeEngagement.delete(args);
  }
}
