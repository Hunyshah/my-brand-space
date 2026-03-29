export type UserRole = "admin" | "user";

export interface User {
  id: string;

  name: string;
  email: string;
  password: string;

  role: UserRole;

  avatar?: string | null;
  isVerified: boolean;

  createdAt: Date;
  updatedAt: Date;
}
