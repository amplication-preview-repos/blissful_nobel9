import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FaqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Answer" multiline source="answer" />
        <TextInput label="Category" source="category" />
        <TextInput label="Question" source="question" />
      </SimpleForm>
    </Create>
  );
};
