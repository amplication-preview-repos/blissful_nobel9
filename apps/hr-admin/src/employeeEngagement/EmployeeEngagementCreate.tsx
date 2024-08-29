import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmployeeEngagementCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Activity" source="activity" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Employee" source="employee" />
        <TextInput label="Feedback" multiline source="feedback" />
      </SimpleForm>
    </Create>
  );
};
