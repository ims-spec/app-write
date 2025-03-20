// useStore
import { type Models } from "appwrite";

export interface IAuthInputs {
  createUser: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<Models.User<[]>>;
}

export interface IAuthState {
  accountSession?: Models.Session | null;
  accountUser?: Models.User<any> | null;
  role?: string | null;
  loading?: boolean;
  error?: string | null;
  createUser: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<Models.User<any>>;
  login: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<Models.User<any>>;
  checkAuth: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<Models.User<any>>;
}
