import { ENV } from "@/data/env";
import { Client, Databases, Account } from "node-appwrite";

export const createAdminClient = async () => {
  if (!ENV.NEXT_PUBLIC_APPWRITE_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_APPWRITE_ENDPOINT is not set");
  } else if (!ENV.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
    throw new Error("NEXT_PUBLIC_APPWRITE_PROJECT_ID is not set");
  } else if (!ENV.NEXT_PUBLIC_APPWRITE_API_KEY) {
    throw new Error("NEXT_PUBLIC_APPWRITE_API_KEY is not set");
  }

  const client = new Client()
    .setEndpoint(ENV.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(ENV.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(ENV.NEXT_PUBLIC_APPWRITE_API_KEY);

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};

export const createSessionClient = async (session: any) => {
  const client = new Client()
    .setEndpoint(ENV.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(ENV.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

  if (session) {
    client.setSession(session);
  }

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
  };
};
