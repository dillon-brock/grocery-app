import { CategoryInList, SuccessfulResponse } from "../../types/types";

export interface CategoryResponse extends SuccessfulResponse {
  category: CategoryInList;
}

export type NewCategoryData = {
  name: string;
  listId: string;
}

export type UpdateCategoryData = {
  id: string;
  name: string;
}