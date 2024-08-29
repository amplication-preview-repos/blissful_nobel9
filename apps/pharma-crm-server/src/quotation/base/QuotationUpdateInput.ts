/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PiRecordUpdateManyWithoutQuotationsInput } from "./PiRecordUpdateManyWithoutQuotationsInput";
import {
  ValidateNested,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsNumber,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@InputType()
class QuotationUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PiRecordUpdateManyWithoutQuotationsInput,
  })
  @ValidateNested()
  @Type(() => PiRecordUpdateManyWithoutQuotationsInput)
  @IsOptional()
  @Field(() => PiRecordUpdateManyWithoutQuotationsInput, {
    nullable: true,
  })
  piRecords?: PiRecordUpdateManyWithoutQuotationsInput;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quotedPrice?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  validUntil?: Date | null;
}

export { QuotationUpdateInput as QuotationUpdateInput };