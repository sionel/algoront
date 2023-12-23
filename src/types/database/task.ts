import { ApiData, ClientData } from "..";

export type Task = {
  isCheck: boolean;
  title: string;
};

export type ApiTask = ApiData<Task>;
export type ClientTask = ClientData<Task>;
