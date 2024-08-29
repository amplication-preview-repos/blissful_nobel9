import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="AddedAt" source="addedAt" />
        <TextInput label="Name" source="name" />
        <TextInput label="Type" source="typeField" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Edit>
  );
};
