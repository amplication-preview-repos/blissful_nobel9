/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmployeeEngagementService } from "../employeeEngagement.service";
import { EmployeeEngagementCreateInput } from "./EmployeeEngagementCreateInput";
import { EmployeeEngagement } from "./EmployeeEngagement";
import { EmployeeEngagementFindManyArgs } from "./EmployeeEngagementFindManyArgs";
import { EmployeeEngagementWhereUniqueInput } from "./EmployeeEngagementWhereUniqueInput";
import { EmployeeEngagementUpdateInput } from "./EmployeeEngagementUpdateInput";

export class EmployeeEngagementControllerBase {
  constructor(protected readonly service: EmployeeEngagementService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EmployeeEngagement })
  async createEmployeeEngagement(
    @common.Body() data: EmployeeEngagementCreateInput
  ): Promise<EmployeeEngagement> {
    return await this.service.createEmployeeEngagement({
      data: data,
      select: {
        activity: true,
        createdAt: true,
        date: true,
        employee: true,
        feedback: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EmployeeEngagement] })
  @ApiNestedQuery(EmployeeEngagementFindManyArgs)
  async employeeEngagements(
    @common.Req() request: Request
  ): Promise<EmployeeEngagement[]> {
    const args = plainToClass(EmployeeEngagementFindManyArgs, request.query);
    return this.service.employeeEngagements({
      ...args,
      select: {
        activity: true,
        createdAt: true,
        date: true,
        employee: true,
        feedback: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EmployeeEngagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employeeEngagement(
    @common.Param() params: EmployeeEngagementWhereUniqueInput
  ): Promise<EmployeeEngagement | null> {
    const result = await this.service.employeeEngagement({
      where: params,
      select: {
        activity: true,
        createdAt: true,
        date: true,
        employee: true,
        feedback: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EmployeeEngagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployeeEngagement(
    @common.Param() params: EmployeeEngagementWhereUniqueInput,
    @common.Body() data: EmployeeEngagementUpdateInput
  ): Promise<EmployeeEngagement | null> {
    try {
      return await this.service.updateEmployeeEngagement({
        where: params,
        data: data,
        select: {
          activity: true,
          createdAt: true,
          date: true,
          employee: true,
          feedback: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EmployeeEngagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployeeEngagement(
    @common.Param() params: EmployeeEngagementWhereUniqueInput
  ): Promise<EmployeeEngagement | null> {
    try {
      return await this.service.deleteEmployeeEngagement({
        where: params,
        select: {
          activity: true,
          createdAt: true,
          date: true,
          employee: true,
          feedback: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}