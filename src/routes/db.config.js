import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  user: "postgres",
  password: "Bruno003",
  host: "localhost",
  port: "5432",
  database: "miriam1",
});

export default pool;
