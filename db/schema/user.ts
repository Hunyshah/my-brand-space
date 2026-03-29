export interface UserSchema {
  id: string;
  name: string;
  email: string;
  role: "admin" | "editor" | "visitor";
}
