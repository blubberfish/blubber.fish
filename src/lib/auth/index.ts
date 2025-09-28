import { betterAuth } from "better-auth";
import config from "./config";

const auth = betterAuth(config);

export default auth;

export const {
  api: { getSession, listUserAccounts },
} = auth;
