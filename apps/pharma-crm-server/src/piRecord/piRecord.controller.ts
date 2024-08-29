import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PiRecordService } from "./piRecord.service";
import { PiRecordControllerBase } from "./base/piRecord.controller.base";

@swagger.ApiTags("piRecords")
@common.Controller("piRecords")
export class PiRecordController extends PiRecordControllerBase {
  constructor(protected readonly service: PiRecordService) {
    super(service);
  }
}
