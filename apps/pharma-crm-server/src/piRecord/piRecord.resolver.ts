import * as graphql from "@nestjs/graphql";
import { PiRecordResolverBase } from "./base/piRecord.resolver.base";
import { PiRecord } from "./base/PiRecord";
import { PiRecordService } from "./piRecord.service";

@graphql.Resolver(() => PiRecord)
export class PiRecordResolver extends PiRecordResolverBase {
  constructor(protected readonly service: PiRecordService) {
    super(service);
  }
}
