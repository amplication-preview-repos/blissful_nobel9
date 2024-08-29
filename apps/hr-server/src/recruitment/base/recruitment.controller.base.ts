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
import { RecruitmentService } from "../recruitment.service";
import { RecruitmentCreateInput } from "./RecruitmentCreateInput";
import { Recruitment } from "./Recruitment";
import { RecruitmentFindManyArgs } from "./RecruitmentFindManyArgs";
import { RecruitmentWhereUniqueInput } from "./RecruitmentWhereUniqueInput";
import { RecruitmentUpdateInput } from "./RecruitmentUpdateInput";

export class RecruitmentControllerBase {
  constructor(protected readonly service: RecruitmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recruitment })
  async createRecruitment(
    @common.Body() data: RecruitmentCreateInput
  ): Promise<Recruitment> {
    return await this.service.createRecruitment({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        position: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Recruitment] })
  @ApiNestedQuery(RecruitmentFindManyArgs)
  async recruitments(@common.Req() request: Request): Promise<Recruitment[]> {
    const args = plainToClass(RecruitmentFindManyArgs, request.query);
    return this.service.recruitments({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        position: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recruitment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async recruitment(
    @common.Param() params: RecruitmentWhereUniqueInput
  ): Promise<Recruitment | null> {
    const result = await this.service.recruitment({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        position: true,
        status: true,
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
  @swagger.ApiOkResponse({ type: Recruitment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRecruitment(
    @common.Param() params: RecruitmentWhereUniqueInput,
    @common.Body() data: RecruitmentUpdateInput
  ): Promise<Recruitment | null> {
    try {
      return await this.service.updateRecruitment({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          position: true,
          status: true,
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
  @swagger.ApiOkResponse({ type: Recruitment })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRecruitment(
    @common.Param() params: RecruitmentWhereUniqueInput
  ): Promise<Recruitment | null> {
    try {
      return await this.service.deleteRecruitment({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          position: true,
          status: true,
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