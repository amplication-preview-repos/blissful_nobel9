import * as graphql from "@nestjs/graphql";
import { PayrollRecordResolverBase } from "./base/payrollRecord.resolver.base";
import { PayrollRecord } from "./base/PayrollRecord";
import { PayrollRecordService } from "./payrollRecord.service";

@graphql.Resolver(() => PayrollRecord)
export class PayrollRecordResolver extends PayrollRecordResolverBase {
  constructor(protected readonly service: PayrollRecordService) {
    super(service);
  }
}
