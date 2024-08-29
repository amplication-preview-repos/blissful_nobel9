import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="AddedAt" source="addedAt" />
        <TextInput label="Name" source="name" />
        <TextInput label="Type" source="typeField" />
        <TextInput label="URL" source="url" />
      </SimpleForm>
    </Create>
  );
};
