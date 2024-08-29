import { Module } from "@nestjs/common";
import { PiRecordModuleBase } from "./base/piRecord.module.base";
import { PiRecordService } from "./piRecord.service";
import { PiRecordController } from "./piRecord.controller";
import { PiRecordResolver } from "./piRecord.resolver";

@Module({
  imports: [PiRecordModuleBase],
  controllers: [PiRecordController],
  providers: [PiRecordService, PiRecordResolver],
  exports: [PiRecordService],
})
export class PiRecordModule {}
