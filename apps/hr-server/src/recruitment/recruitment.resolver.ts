import * as graphql from "@nestjs/graphql";
import { RecruitmentResolverBase } from "./base/recruitment.resolver.base";
import { Recruitment } from "./base/Recruitment";
import { RecruitmentService } from "./recruitment.service";

@graphql.Resolver(() => Recruitment)
export class RecruitmentResolver extends RecruitmentResolverBase {
  constructor(protected readonly service: RecruitmentService) {
    super(service);
  }
}
