import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TrainingServiceBase } from "./base/training.service.base";

@Injectable()
export class TrainingService extends TrainingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
