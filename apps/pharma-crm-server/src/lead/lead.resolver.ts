import * as graphql from "@nestjs/graphql";
import { LeadResolverBase } from "./base/lead.resolver.base";
import { Lead } from "./base/Lead";
import { LeadService } from "./lead.service";

@graphql.Resolver(() => Lead)
export class LeadResolver extends LeadResolverBase {
  constructor(protected readonly service: LeadService) {
    super(service);
  }
}
