import { HierarchyWhereInput } from "./HierarchyWhereInput";
import { HierarchyOrderByInput } from "./HierarchyOrderByInput";

export type HierarchyFindManyArgs = {
  where?: HierarchyWhereInput;
  orderBy?: Array<HierarchyOrderByInput>;
  skip?: number;
  take?: number;
};
