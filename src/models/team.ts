export type AccessType = "admin" | "user" | "manager";

export interface IRenderCell {
  row: {
    access: AccessType;
  };
}
