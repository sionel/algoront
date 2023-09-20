import { ApiData, ClientData } from ".";

export type Comment = {
  questionId: string;
  username: string;
  password: string;
  text: string;
};

export type ApiComment = ApiData<Comment>;
export type ClientComment = ClientData<Comment>;
