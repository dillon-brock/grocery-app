import { List, ListWithDetail, SuccessfulResponse } from "../../types/types";

export interface ListResponse extends SuccessfulResponse {
  list: List
}

export interface AllListsResponse extends SuccessfulResponse {
  lists: List[];
}

export interface GetListResponse extends SuccessfulResponse {
  list: ListWithDetail;
}

export type ListUpdateData = {
  title?: string
}