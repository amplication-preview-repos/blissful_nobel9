import { Module } from "@nestjs/common";
import { RecruitmentModuleBase } from "./base/recruitment.module.base";
import { RecruitmentService } from "./recruitment.service";
import { RecruitmentController } from "./recruitment.controller";
import { RecruitmentResolver } from "./recruitment.resolver";

@Module({
  imports: [RecruitmentModuleBase],
  controllers: [RecruitmentController],
  providers: [RecruitmentService, RecruitmentResolver],
  exports: [RecruitmentService],
})
export class RecruitmentModule {}
