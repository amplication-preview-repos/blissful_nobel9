import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuotationService } from "./quotation.service";
import { QuotationControllerBase } from "./base/quotation.controller.base";

@swagger.ApiTags("quotations")
@common.Controller("quotations")
export class QuotationController extends QuotationControllerBase {
  constructor(protected readonly service: QuotationService) {
    super(service);
  }
}
