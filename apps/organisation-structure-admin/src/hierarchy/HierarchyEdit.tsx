import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const HierarchyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Employee" source="employee" />
        <NumberInput step={1} label="Level" source="level" />
        <TextInput label="Supervisor" source="supervisor" />
      </SimpleForm>
    </Edit>
  );
};
