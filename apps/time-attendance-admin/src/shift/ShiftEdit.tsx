import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ShiftEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="EndTime" source="endTime" />
        <TextInput label="Name" source="name" />
        <DateTimeInput label="StartTime" source="startTime" />
      </SimpleForm>
    </Edit>
  );
};
