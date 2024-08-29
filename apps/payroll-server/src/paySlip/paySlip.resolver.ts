import * as graphql from "@nestjs/graphql";
import { PaySlipResolverBase } from "./base/paySlip.resolver.base";
import { PaySlip } from "./base/PaySlip";
import { PaySlipService } from "./paySlip.service";

@graphql.Resolver(() => PaySlip)
export class PaySlipResolver extends PaySlipResolverBase {
  constructor(protected readonly service: PaySlipService) {
    super(service);
  }
}
