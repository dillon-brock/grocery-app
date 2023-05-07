import { CategoryInList, SuccessfulResponse } from "../../types/types";

export interface CreateCategoryResponse extends SuccessfulResponse {
  category: CategoryInList;
}

export type NewCategoryData = {
  name: string;
  listId: string;
}