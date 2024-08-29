/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ShiftWhereUniqueInput } from "./ShiftWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ShiftUpdateInput } from "./ShiftUpdateInput";

@ArgsType()
class UpdateShiftArgs {
  @ApiProperty({
    required: true,
    type: () => ShiftWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ShiftWhereUniqueInput)
  @Field(() => ShiftWhereUniqueInput, { nullable: false })
  where!: ShiftWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ShiftUpdateInput,
  })
  @ValidateNested()
  @Type(() => ShiftUpdateInput)
  @Field(() => ShiftUpdateInput, { nullable: false })
  data!: ShiftUpdateInput;
}

export { UpdateShiftArgs as UpdateShiftArgs };
