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
import { TrainingWhereInput } from "./TrainingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TrainingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TrainingWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingWhereInput)
  @IsOptional()
  @Field(() => TrainingWhereInput, {
    nullable: true,
  })
  every?: TrainingWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrainingWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingWhereInput)
  @IsOptional()
  @Field(() => TrainingWhereInput, {
    nullable: true,
  })
  some?: TrainingWhereInput;

  @ApiProperty({
    required: false,
    type: () => TrainingWhereInput,
  })
  @ValidateNested()
  @Type(() => TrainingWhereInput)
  @IsOptional()
  @Field(() => TrainingWhereInput, {
    nullable: true,
  })
  none?: TrainingWhereInput;
}
export { TrainingListRelationFilter as TrainingListRelationFilter };