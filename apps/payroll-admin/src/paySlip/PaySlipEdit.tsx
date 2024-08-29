import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PayrollRecordTitle } from "../payrollRecord/PayrollRecordTitle";

export const PaySlipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
