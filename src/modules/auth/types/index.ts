import type { User } from "@/modules/user/types";

export type SignInData = {
  email: string;
  password: string;
};

export type SignInResponse = {
  data: User | null;
  error: string | null;
};

export type SignUpData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpResponse = {
  data: User;
  error: string | null;
};
