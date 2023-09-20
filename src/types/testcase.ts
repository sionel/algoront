import { ApiData, ClientData } from ".";

export type Testcase = {
  case: string;
  index: number;
  like: number;
  questionId: string;
};

export type ApiTestcase = ApiData<Testcase>;
export type ClientTestcase = ClientData<Testcase>;
