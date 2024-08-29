import { Module } from "@nestjs/common";
import { QuotationModuleBase } from "./base/quotation.module.base";
import { QuotationService } from "./quotation.service";
import { QuotationController } from "./quotation.controller";
import { QuotationResolver } from "./quotation.resolver";

@Module({
  imports: [QuotationModuleBase],
  controllers: [QuotationController],
  providers: [QuotationService, QuotationResolver],
  exports: [QuotationService],
})
export class QuotationModule {}
