import { ListItem, SuccessfulResponse } from "../../types/types";

export type NewListItemData = {
  listId: string;
  item: string;
  quantity: number | null;
  categoryId: string;
}

export interface ListItemResponse extends SuccessfulResponse {
  item: ListItem;
}

export type UpdateListItemData = {
  item?: string;
  bought?: boolean;
  quantity?: number;
  categoryId?: string;
}