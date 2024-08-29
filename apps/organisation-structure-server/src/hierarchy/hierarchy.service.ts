import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HierarchyServiceBase } from "./base/hierarchy.service.base";

@Injectable()
export class HierarchyService extends HierarchyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
