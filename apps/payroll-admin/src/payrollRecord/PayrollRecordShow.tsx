import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAYROLLRECORD_TITLE_FIELD } from "./PayrollRecordTitle";
import { EMPLOYEESALARY_TITLE_FIELD } from "../employeeSalary/EmployeeSalaryTitle";

export const PayrollRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <ReferenceField
          label="EmployeeSalary"
          source="employeesalary.id"
          reference="EmployeeSalary"
        >
          <TextField source={EMPLOYEESALARY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PaySlip"
          target="payrollRecordId"
          label="PaySlips"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Employee" source="employee" />
            <TextField label="ID" source="id" />
            <TextField label="IssuedAt" source="issuedAt" />
            <ReferenceField
              label="PayrollRecord"
              source="payrollrecord.id"
              reference="PayrollRecord"
            >
              <TextField source={PAYROLLRECORD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
