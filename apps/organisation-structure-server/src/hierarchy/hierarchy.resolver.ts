import * as graphql from "@nestjs/graphql";
import { HierarchyResolverBase } from "./base/hierarchy.resolver.base";
import { Hierarchy } from "./base/Hierarchy";
import { HierarchyService } from "./hierarchy.service";

@graphql.Resolver(() => Hierarchy)
export class HierarchyResolver extends HierarchyResolverBase {
  constructor(protected readonly service: HierarchyService) {
    super(service);
  }
}
