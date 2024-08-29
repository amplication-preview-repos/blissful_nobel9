import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QuotationTitle } from "../quotation/QuotationTitle";

export const PiRecordCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <TextInput label="IssuedBy" source="issuedBy" />
        <ReferenceInput
          source="quotation.id"
          reference="Quotation"
          label="Quotation"
        >
          <SelectInput optionText={QuotationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
