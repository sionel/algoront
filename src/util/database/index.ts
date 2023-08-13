import { MongoClient, Db } from "mongodb";

const uri =
  "mongodb+srv://coo:zxc123@algoront.mhuv85p.mongodb.net/?retryWrites=true&w=majority"; // MongoDB URI
const dbName = "algoront"; // MongoDB 데이터베이스 이름

let cachedClient: { client: MongoClient; db: Db } | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = new MongoClient(uri);

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
