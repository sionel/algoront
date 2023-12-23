import { ApiData, ClientData } from "..";

export type Post = {
  difficulty: string;
  source: string;
  title: string;
  index: string;
  path: string;
};

export type ApiPost = ApiData<Post>;
export type ClientPost = ClientData<Post>;
