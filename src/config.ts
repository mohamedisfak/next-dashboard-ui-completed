import pgPromise from "pg-promise";
import dotenv from "dotenv";

dotenv.config();

const pgp = pgPromise();
const db = pgp(process.env.DATABASE_URL as string);

db.connect()
  .then(() => console.log("PostgreSQL Connected Successfully"))
  .catch((error) => console.error("PostgreSQL Connection Error:", error));

export default db;
