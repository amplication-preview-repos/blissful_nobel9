import { Module } from "@nestjs/common";
import { EmployeeEngagementModuleBase } from "./base/employeeEngagement.module.base";
import { EmployeeEngagementService } from "./employeeEngagement.service";
import { EmployeeEngagementController } from "./employeeEngagement.controller";
import { EmployeeEngagementResolver } from "./employeeEngagement.resolver";

@Module({
  imports: [EmployeeEngagementModuleBase],
  controllers: [EmployeeEngagementController],
  providers: [EmployeeEngagementService, EmployeeEngagementResolver],
  exports: [EmployeeEngagementService],
})
export class EmployeeEngagementModule {}
