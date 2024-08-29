import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeEngagementService } from "./employeeEngagement.service";
import { EmployeeEngagementControllerBase } from "./base/employeeEngagement.controller.base";

@swagger.ApiTags("employeeEngagements")
@common.Controller("employeeEngagements")
export class EmployeeEngagementController extends EmployeeEngagementControllerBase {
  constructor(protected readonly service: EmployeeEngagementService) {
    super(service);
  }
}
