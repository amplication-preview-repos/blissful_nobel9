import * as graphql from "@nestjs/graphql";
import { SaleResolverBase } from "./base/sale.resolver.base";
import { Sale } from "./base/Sale";
import { SaleService } from "./sale.service";

@graphql.Resolver(() => Sale)
export class SaleResolver extends SaleResolverBase {
  constructor(protected readonly service: SaleService) {
    super(service);
  }
}
