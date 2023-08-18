import { ObjectId } from "mongodb";

export type ApiData<T> = T & {
  _id: ObjectId;
};


export type ClientData<T> = Omit<T, '_id'> & {
  id: string;
}