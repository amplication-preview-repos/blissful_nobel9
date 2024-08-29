import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecruitmentService } from "./recruitment.service";
import { RecruitmentControllerBase } from "./base/recruitment.controller.base";

@swagger.ApiTags("recruitments")
@common.Controller("recruitments")
export class RecruitmentController extends RecruitmentControllerBase {
  constructor(protected readonly service: RecruitmentService) {
    super(service);
  }
}
