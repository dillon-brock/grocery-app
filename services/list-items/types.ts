import { ListItem, SuccessfulResponse } from "../../types/types";

export type NewListItemData = {
  listId: string;
  item: string;
  quantity: string | null;
  categoryId: string;
}

export interface ListItemResponse extends SuccessfulResponse {
  listItem: ListItem;
}

export type UpdateListItemData = {
  item?: string;
  bought?: boolean;
  quantity?: string;
  categoryId?: string;
}