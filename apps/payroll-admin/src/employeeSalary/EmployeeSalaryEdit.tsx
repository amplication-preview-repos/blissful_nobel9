import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PayrollRecordTitle } from "../payrollRecord/PayrollRecordTitle";

export const EmployeeSalaryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Employee" source="employee" />
        <ReferenceArrayInput
          source="payrollRecords"
          reference="PayrollRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PayrollRecordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
