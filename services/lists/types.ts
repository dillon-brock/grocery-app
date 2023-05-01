import { List, SuccessfulResponse } from "../../types/types";

export interface CreateListResponse extends SuccessfulResponse {
  list: List
}

export interface AllListsResponse extends SuccessfulResponse {
  lists: List[];
}