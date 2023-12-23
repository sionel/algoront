import { ObjectId } from "mongodb";

export type Comment = {
  questionId: string;
  username: string;
  password: string;
  text: string;
};

export type Visit = {
  type: 'today' | 'total';
  count: number;
};

export type Post = {
  difficulty: string;
  source: string;
  title: string;
  index: string;
  path: string;
};

export type Task = {
  isCheck: boolean;
  title: string;
};

export type ApiData<T> = T & {
  _id: ObjectId;
};


export type ClientData<T> = Omit<T, '_id'> & {
  id: string;
}


export type ApiTask = ApiData<Task>;
export type ClientTask = ClientData<Task>;
export type ApiPost = ApiData<Post>;
export type ClientPost = ClientData<Post>;
export type ApiVisit = ApiData<Visit>;
export type ClientVisit = ClientData<Visit>;
export type ApiComment = ApiData<Comment>;
export type ClientComment = ClientData<Comment>;
