import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PayrollRecordService } from "./payrollRecord.service";
import { PayrollRecordControllerBase } from "./base/payrollRecord.controller.base";

@swagger.ApiTags("payrollRecords")
@common.Controller("payrollRecords")
export class PayrollRecordController extends PayrollRecordControllerBase {
  constructor(protected readonly service: PayrollRecordService) {
    super(service);
  }
}
