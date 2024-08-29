import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ShiftCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartTime" source="startTime" />
      </SimpleForm>
    </Create>
  );
};
