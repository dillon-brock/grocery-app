import { List, SuccessfulResponse } from "../../types/types";

export type ListShare = {
  id: string;
  userId: string;
  listId: string;
  editable: boolean;
}

export interface ListShareResponse extends SuccessfulResponse {
  shareData: ListShare
}

export type NewListShareData = {
  userId: string;
  listId: string;
  editable: boolean;
}

export interface SharedListsRes extends SuccessfulResponse {
  sharedLists: List[]
}