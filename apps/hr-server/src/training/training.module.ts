import { Module } from "@nestjs/common";
import { TrainingModuleBase } from "./base/training.module.base";
import { TrainingService } from "./training.service";
import { TrainingController } from "./training.controller";
import { TrainingResolver } from "./training.resolver";

@Module({
  imports: [TrainingModuleBase],
  controllers: [TrainingController],
  providers: [TrainingService, TrainingResolver],
  exports: [TrainingService],
})
export class TrainingModule {}
