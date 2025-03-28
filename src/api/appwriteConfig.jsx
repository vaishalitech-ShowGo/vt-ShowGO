import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) 
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); 
    // console.log("Appwrite Endpoint:", import.meta.env.VITE_APPWRITE_ENDPOINT);
    // console.log("Appwrite Project ID:", import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
