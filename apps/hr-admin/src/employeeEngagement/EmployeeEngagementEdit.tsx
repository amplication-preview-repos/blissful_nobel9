import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EmployeeEngagementEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Activity" source="activity" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Employee" source="employee" />
        <TextInput label="Feedback" multiline source="feedback" />
      </SimpleForm>
    </Edit>
  );
};
