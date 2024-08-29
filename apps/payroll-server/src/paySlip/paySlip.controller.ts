import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaySlipService } from "./paySlip.service";
import { PaySlipControllerBase } from "./base/paySlip.controller.base";

@swagger.ApiTags("paySlips")
@common.Controller("paySlips")
export class PaySlipController extends PaySlipControllerBase {
  constructor(protected readonly service: PaySlipService) {
    super(service);
  }
}
