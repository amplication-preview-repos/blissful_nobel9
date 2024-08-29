import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SaleService } from "./sale.service";
import { SaleControllerBase } from "./base/sale.controller.base";

@swagger.ApiTags("sales")
@common.Controller("sales")
export class SaleController extends SaleControllerBase {
  constructor(protected readonly service: SaleService) {
    super(service);
  }
}
