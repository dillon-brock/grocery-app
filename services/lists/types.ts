import { List, SuccessfulResponse } from "../../types/types";

export interface CreateListResponse extends SuccessfulResponse {
  list: List
}