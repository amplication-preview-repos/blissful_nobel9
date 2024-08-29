import { Module } from "@nestjs/common";
import { EmployeeSalaryModuleBase } from "./base/employeeSalary.module.base";
import { EmployeeSalaryService } from "./employeeSalary.service";
import { EmployeeSalaryController } from "./employeeSalary.controller";
import { EmployeeSalaryResolver } from "./employeeSalary.resolver";

@Module({
  imports: [EmployeeSalaryModuleBase],
  controllers: [EmployeeSalaryController],
  providers: [EmployeeSalaryService, EmployeeSalaryResolver],
  exports: [EmployeeSalaryService],
})
export class EmployeeSalaryModule {}
