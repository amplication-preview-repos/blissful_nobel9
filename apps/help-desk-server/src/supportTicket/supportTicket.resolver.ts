import * as graphql from "@nestjs/graphql";
import { SupportTicketResolverBase } from "./base/supportTicket.resolver.base";
import { SupportTicket } from "./base/SupportTicket";
import { SupportTicketService } from "./supportTicket.service";

@graphql.Resolver(() => SupportTicket)
export class SupportTicketResolver extends SupportTicketResolverBase {
  constructor(protected readonly service: SupportTicketService) {
    super(service);
  }
}
