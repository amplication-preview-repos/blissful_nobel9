import * as graphql from "@nestjs/graphql";
import { QuotationResolverBase } from "./base/quotation.resolver.base";
import { Quotation } from "./base/Quotation";
import { QuotationService } from "./quotation.service";

@graphql.Resolver(() => Quotation)
export class QuotationResolver extends QuotationResolverBase {
  constructor(protected readonly service: QuotationService) {
    super(service);
  }
}
