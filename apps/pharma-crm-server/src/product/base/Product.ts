/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsDate,
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";

import { Type } from "class-transformer";
import { Purchase } from "../../purchase/base/Purchase";
import { Quotation } from "../../quotation/base/Quotation";
import { Sale } from "../../sale/base/Sale";

@ObjectType()
class Product {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description!: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name!: string | null;

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
  price!: number | null;

  @ApiProperty({
    required: false,
    type: () => [Purchase],
  })
  @ValidateNested()
  @Type(() => Purchase)
  @IsOptional()
  purchases?: Array<Purchase>;

  @ApiProperty({
    required: false,
    type: () => [Quotation],
  })
  @ValidateNested()
  @Type(() => Quotation)
  @IsOptional()
  quotations?: Array<Quotation>;

  @ApiProperty({
    required: false,
    type: () => [Sale],
  })
  @ValidateNested()
  @Type(() => Sale)
  @IsOptional()
  sales?: Array<Sale>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Product as Product };
