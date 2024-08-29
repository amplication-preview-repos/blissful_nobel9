import { Module } from "@nestjs/common";
import { PayrollRecordModuleBase } from "./base/payrollRecord.module.base";
import { PayrollRecordService } from "./payrollRecord.service";
import { PayrollRecordController } from "./payrollRecord.controller";
import { PayrollRecordResolver } from "./payrollRecord.resolver";

@Module({
  imports: [PayrollRecordModuleBase],
  controllers: [PayrollRecordController],
  providers: [PayrollRecordService, PayrollRecordResolver],
  exports: [PayrollRecordService],
})
export class PayrollRecordModule {}
