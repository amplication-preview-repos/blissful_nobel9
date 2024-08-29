import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FaqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Answer" multiline source="answer" />
        <TextInput label="Category" source="category" />
        <TextInput label="Question" source="question" />
      </SimpleForm>
    </Edit>
  );
};
