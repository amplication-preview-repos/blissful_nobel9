import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PAYROLLRECORD_TITLE_FIELD } from "../payrollRecord/PayrollRecordTitle";

export const PaySlipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
