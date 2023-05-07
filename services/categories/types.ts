import { CategoryInList, SuccessfulResponse } from "../../types/types";

export interface CreateCategoryResponse extends SuccessfulResponse {
  category: CategoryInList;
}