import { Hierarchy as THierarchy } from "../api/hierarchy/Hierarchy";

export const HIERARCHY_TITLE_FIELD = "employee";

export const HierarchyTitle = (record: THierarchy): string => {
  return record.employee?.toString() || String(record.id);
};
