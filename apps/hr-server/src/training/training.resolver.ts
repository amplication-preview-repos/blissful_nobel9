import * as graphql from "@nestjs/graphql";
import { TrainingResolverBase } from "./base/training.resolver.base";
import { Training } from "./base/Training";
import { TrainingService } from "./training.service";

@graphql.Resolver(() => Training)
export class TrainingResolver extends TrainingResolverBase {
  constructor(protected readonly service: TrainingService) {
    super(service);
  }
}
