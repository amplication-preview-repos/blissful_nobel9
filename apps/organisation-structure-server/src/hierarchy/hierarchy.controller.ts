import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HierarchyService } from "./hierarchy.service";
import { HierarchyControllerBase } from "./base/hierarchy.controller.base";

@swagger.ApiTags("hierarchies")
@common.Controller("hierarchies")
export class HierarchyController extends HierarchyControllerBase {
  constructor(protected readonly service: HierarchyService) {
    super(service);
  }
}
