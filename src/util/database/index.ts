import { ApiData, ClientData } from "@/types";
import { MongoClient, Db, Collection } from "mongodb";

const url = process.env.DATABASE_URI as string;
const dbName = process.env.DATABASE_NAME as string;

let cachedClient: { client: MongoClient; db: Db } | null = null;

export const connectToDatabase = async () => {
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
};

export const getCollections = async () => {
  const {db} = await connectToDatabase();
  const commentsName = process.env.COMMENTS_COLLECTION_NAME ?? "";
  const markdownsName = process.env.MARKDOWNS_COLLECTION_NAME ?? "";
  const postsName = process.env.POSTS_COLLECTION_NAME ?? "";
  const questionsName = process.env.QUESTIONS_COLLECTION_NAME ?? "";
  const tasksName = process.env.TASKS_COLLECTION_NAME ?? "";
  const testcasesName = process.env.TESTCASES_COLLECTION_NAME ?? "";
  const accessStatsName = process.env.ACCESSSTATS_COLLECTION_NAME ?? "";

  const commentsCollection: Collection = db.collection(commentsName);
  const markdownsCollection: Collection = db.collection(markdownsName);
  const postsCollection: Collection = db.collection(postsName);
  const questionsCollection: Collection = db.collection(questionsName);
  const tasksCollection: Collection = db.collection(tasksName);
  const testcasesCollection: Collection = db.collection(testcasesName);
  const accessStatsCollection: Collection = db.collection(accessStatsName);

  const collections: Record<string, Collection> = {};
  collections.comments = commentsCollection;
  collections.markdowns = markdownsCollection;
  collections.posts = postsCollection;
  collections.questions = questionsCollection;
  collections.tasks = tasksCollection;
  collections.testcases = testcasesCollection;
  collections.accessStats = accessStatsCollection;
  return collections;
};

export const convertApiDataToClientData = <T>(
  apiData: ApiData<T>
): ClientData<T> => {
  const { _id, ...rest } = apiData;
  return { ...rest, id: String(_id) };
};
