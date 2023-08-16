import { MongoClient, Db } from "mongodb";

const url = process.env.DATABASE_URI as string;
const dbName = process.env.DATABASE_NAME as string;

let cachedClient: { client: MongoClient; db: Db } | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);

    cachedClient = {
      client: client,
      db: db,
    };

    return cachedClient;
  } catch (err) {
    console.error("MongoDB 연결 오류:", err);
    throw err;
  }
}
