/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AttendanceRecord } from "./AttendanceRecord";
import { AttendanceRecordCountArgs } from "./AttendanceRecordCountArgs";
import { AttendanceRecordFindManyArgs } from "./AttendanceRecordFindManyArgs";
import { AttendanceRecordFindUniqueArgs } from "./AttendanceRecordFindUniqueArgs";
import { CreateAttendanceRecordArgs } from "./CreateAttendanceRecordArgs";
import { UpdateAttendanceRecordArgs } from "./UpdateAttendanceRecordArgs";
import { DeleteAttendanceRecordArgs } from "./DeleteAttendanceRecordArgs";
import { AttendanceRecordService } from "../attendanceRecord.service";
@graphql.Resolver(() => AttendanceRecord)
export class AttendanceRecordResolverBase {
  constructor(protected readonly service: AttendanceRecordService) {}

  async _attendanceRecordsMeta(
    @graphql.Args() args: AttendanceRecordCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AttendanceRecord])
  async attendanceRecords(
    @graphql.Args() args: AttendanceRecordFindManyArgs
  ): Promise<AttendanceRecord[]> {
    return this.service.attendanceRecords(args);
  }

  @graphql.Query(() => AttendanceRecord, { nullable: true })
  async attendanceRecord(
    @graphql.Args() args: AttendanceRecordFindUniqueArgs
  ): Promise<AttendanceRecord | null> {
    const result = await this.service.attendanceRecord(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AttendanceRecord)
  async createAttendanceRecord(
    @graphql.Args() args: CreateAttendanceRecordArgs
  ): Promise<AttendanceRecord> {
    return await this.service.createAttendanceRecord({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => AttendanceRecord)
  async updateAttendanceRecord(
    @graphql.Args() args: UpdateAttendanceRecordArgs
  ): Promise<AttendanceRecord | null> {
    try {
      return await this.service.updateAttendanceRecord({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AttendanceRecord)
  async deleteAttendanceRecord(
    @graphql.Args() args: DeleteAttendanceRecordArgs
  ): Promise<AttendanceRecord | null> {
    try {
      return await this.service.deleteAttendanceRecord(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
