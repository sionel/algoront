import { ObjectId } from "mongodb";
import { ApiData, ClientData } from ".";

export type Comment = {
  id: string;
  pw: string;
  text : string
};

export type ApiComment = ApiData<Comment>;
export type ClientComment = ClientData<Comment>;
