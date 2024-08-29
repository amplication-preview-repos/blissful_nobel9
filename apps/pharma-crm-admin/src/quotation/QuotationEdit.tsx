import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { PiRecordTitle } from "../piRecord/PiRecordTitle";
import { ProductTitle } from "../product/ProductTitle";

export const QuotationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="piRecords"
          reference="PiRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PiRecordTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="QuotedPrice" source="quotedPrice" />
        <DateTimeInput label="ValidUntil" source="validUntil" />
      </SimpleForm>
    </Edit>
  );
};
