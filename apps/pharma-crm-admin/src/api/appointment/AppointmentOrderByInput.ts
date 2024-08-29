import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
