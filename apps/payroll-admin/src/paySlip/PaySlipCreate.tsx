import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PayrollRecordTitle } from "../payrollRecord/PayrollRecordTitle";

export const PaySlipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Employee" source="employee" />
        <DateTimeInput label="IssuedAt" source="issuedAt" />
        <ReferenceInput
          source="payrollRecord.id"
          reference="PayrollRecord"
          label="PayrollRecord"
        >
          <SelectInput optionText={PayrollRecordTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
