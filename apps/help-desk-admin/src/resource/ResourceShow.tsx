import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="AddedAt" source="addedAt" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="URL" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
