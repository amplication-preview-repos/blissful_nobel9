import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmployeeSalaryService } from "./employeeSalary.service";
import { EmployeeSalaryControllerBase } from "./base/employeeSalary.controller.base";

@swagger.ApiTags("employeeSalaries")
@common.Controller("employeeSalaries")
export class EmployeeSalaryController extends EmployeeSalaryControllerBase {
  constructor(protected readonly service: EmployeeSalaryService) {
    super(service);
  }
}
