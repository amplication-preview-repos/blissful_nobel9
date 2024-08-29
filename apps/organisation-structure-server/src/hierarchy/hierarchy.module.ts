import { Module } from "@nestjs/common";
import { HierarchyModuleBase } from "./base/hierarchy.module.base";
import { HierarchyService } from "./hierarchy.service";
import { HierarchyController } from "./hierarchy.controller";
import { HierarchyResolver } from "./hierarchy.resolver";

@Module({
  imports: [HierarchyModuleBase],
  controllers: [HierarchyController],
  providers: [HierarchyService, HierarchyResolver],
  exports: [HierarchyService],
})
export class HierarchyModule {}
