import { ApiData, ClientData } from "..";

export type Visit = {
  type: 'today' | 'total';
  count: number;
};

export type ApiVisit = ApiData<Visit>;
export type ClientVisit = ClientData<Visit>;
