import * as graphql from "@nestjs/graphql";
import { EmployeeSalaryResolverBase } from "./base/employeeSalary.resolver.base";
import { EmployeeSalary } from "./base/EmployeeSalary";
import { EmployeeSalaryService } from "./employeeSalary.service";

@graphql.Resolver(() => EmployeeSalary)
export class EmployeeSalaryResolver extends EmployeeSalaryResolverBase {
  constructor(protected readonly service: EmployeeSalaryService) {
    super(service);
  }
}
