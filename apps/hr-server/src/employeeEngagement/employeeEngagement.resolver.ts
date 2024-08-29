import * as graphql from "@nestjs/graphql";
import { EmployeeEngagementResolverBase } from "./base/employeeEngagement.resolver.base";
import { EmployeeEngagement } from "./base/EmployeeEngagement";
import { EmployeeEngagementService } from "./employeeEngagement.service";

@graphql.Resolver(() => EmployeeEngagement)
export class EmployeeEngagementResolver extends EmployeeEngagementResolverBase {
  constructor(protected readonly service: EmployeeEngagementService) {
    super(service);
  }
}
