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

    setCollection(db);

    return cachedClient;
  } catch (err) {
    console.error("MongoDB 연결 오류:", err);
    throw err;
  }
};

const setCollection = (db: Db) => {
  const commentsName = process.env.COMMENTS_COLLECTION_NAME ?? "";
  const markdownsName = process.env.MARKDOWNS_COLLECTION_NAME ?? "";
  const postsName = process.env.POSTS_COLLECTION_NAME ?? "";
  const questionsName = process.env.QUESTIONS_COLLECTION_NAME ?? "";
  const tasksName = process.env.TASKS_COLLECTION_NAME ?? "";
  const testcasesName = process.env.TESTCASES_COLLECTION_NAME ?? "";
  const visitName = process.env.VISIT_COLLECTION_NAME ?? "";

  const commentsCollection: Collection = db.collection(commentsName);
  const markdownsCollection: Collection = db.collection(markdownsName);
  const postsCollection: Collection = db.collection(postsName);
  const questionsCollection: Collection = db.collection(questionsName);
  const tasksCollection: Collection = db.collection(tasksName);
  const testcasesCollection: Collection = db.collection(testcasesName);
  const visitCollection: Collection = db.collection(visitName);

  collections.comments = commentsCollection;
  collections.markdowns = markdownsCollection;
  collections.posts = postsCollection;
  collections.questions = questionsCollection;
  collections.tasks = tasksCollection;
  collections.testcases = testcasesCollection;
  collections.visit = visitCollection;
};

export const convertApiDataToClientData = <T>(
  apiData: ApiData<T>
): ClientData<T> => {
  const { _id, ...rest } = apiData;
  return { ...rest, id: String(_id) };
};

export const collections: {
  comments?: Collection;
  markdowns?: Collection;
  posts?: Collection;
  questions?: Collection;
  tasks?: Collection;
  testcases?: Collection;
  visit?: Collection;
} = {};
