import { Client } from "https://deno.land/x/postgres/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

const client = new Client({
  user: Deno.env.get("DB_USERNAME"),
  database: Deno.env.get("DB_DATABASE"),
  hostname: Deno.env.get("DB_HOST"),
  port: parseInt(Deno.env.get("DB_PORT")!),
  password: Deno.env.get("DB_PASSWORD"),
});

export { client };
