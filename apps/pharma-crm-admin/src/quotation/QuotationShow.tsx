import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUOTATION_TITLE_FIELD } from "./QuotationTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";

export const QuotationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Quantity" source="quantity" />
        <TextField label="QuotedPrice" source="quotedPrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ValidUntil" source="validUntil" />
        <ReferenceManyField
          reference="PiRecord"
          target="quotationId"
          label="PIRecords"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="IssuedBy" source="issuedBy" />
            <ReferenceField
              label="Quotation"
              source="quotation.id"
              reference="Quotation"
            >
              <TextField source={QUOTATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
