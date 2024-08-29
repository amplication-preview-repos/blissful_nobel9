import { Module } from "@nestjs/common";
import { PaySlipModuleBase } from "./base/paySlip.module.base";
import { PaySlipService } from "./paySlip.service";
import { PaySlipController } from "./paySlip.controller";
import { PaySlipResolver } from "./paySlip.resolver";

@Module({
  imports: [PaySlipModuleBase],
  controllers: [PaySlipController],
  providers: [PaySlipService, PaySlipResolver],
  exports: [PaySlipService],
})
export class PaySlipModule {}
