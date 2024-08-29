import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { EmployeeSalaryTitle } from "../employeeSalary/EmployeeSalaryTitle";
import { PaySlipTitle } from "../paySlip/PaySlipTitle";

export const PayrollRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <ReferenceInput
          source="employeeSalary.id"
          reference="EmployeeSalary"
          label="EmployeeSalary"
        >
          <SelectInput optionText={EmployeeSalaryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="paySlips"
          reference="PaySlip"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaySlipTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
