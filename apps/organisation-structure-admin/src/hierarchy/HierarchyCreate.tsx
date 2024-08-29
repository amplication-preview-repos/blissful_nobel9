import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HierarchyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Employee" source="employee" />
        <NumberInput step={1} label="Level" source="level" />
        <TextInput label="Supervisor" source="supervisor" />
      </SimpleForm>
    </Create>
  );
};
