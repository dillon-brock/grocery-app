import { List, ListWithItems, SuccessfulResponse } from "../../types/types";

export interface CreateListResponse extends SuccessfulResponse {
  list: List
}

export interface AllListsResponse extends SuccessfulResponse {
  lists: List[];
}

export interface GetListResponse extends SuccessfulResponse {
  list: ListWithItems[];
}