import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PAYROLLRECORD_TITLE_FIELD } from "../payrollRecord/PayrollRecordTitle";

export const PaySlipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PaySlips"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
