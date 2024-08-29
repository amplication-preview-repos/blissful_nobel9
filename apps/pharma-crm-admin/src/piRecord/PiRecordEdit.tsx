import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QuotationTitle } from "../quotation/QuotationTitle";

export const PiRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
