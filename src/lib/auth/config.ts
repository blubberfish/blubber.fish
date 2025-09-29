import { BetterAuthOptions } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

function assertNonEmptyString(value: any): string {
  if (typeof value === "string" && !!value) {
    return value;
  }
  throw new Error();
}

const dbClient = new MongoClient(
  assertNonEmptyString(process.env.MONGO_DB_URI)
);

export default {
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: new URL(assertNonEmptyString(process.env.BETTER_AUTH_URL))
        .hostname,
    },
  },
  socialProviders: {
    github: {
      clientId: assertNonEmptyString(process.env.GITHUB_CLIENT_ID),
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  database: mongodbAdapter(
    dbClient.db(assertNonEmptyString(process.env.USERS_DB)),
    {
      client: dbClient,
    }
  ),
} satisfies BetterAuthOptions;
