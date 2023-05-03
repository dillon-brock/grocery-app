import { ListItem, SuccessfulResponse } from "../../types/types";

export type NewListItemData = {
  listId: string;
  item: string;
  quantity: number;
}

export interface AddListItemResponse extends SuccessfulResponse {
  item: ListItem;
}