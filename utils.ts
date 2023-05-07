import { DatabaseErrorResponse, ListItem, ListWithDetail } from "./types/types";

export async function responseWithSuccessStatus<T>(res: Response): Promise<T | DatabaseErrorResponse> {
  const success: boolean = res.status == 200;
  const jsonRes = await res.json();
  jsonRes.success = success;
  return jsonRes;
}

type ItemUpdateInfo = {
  prev: ListWithDetail;
  categoryId: string;
  itemId: string;
  prop: keyof ListItem;
  val: string | boolean | null;
}

export function updateItemInState({ prev, categoryId, itemId, prop, val}: ItemUpdateInfo): ListWithDetail {
  const category = prev.categories.find(c => c.id == categoryId);
  const itemToBeUpdated = category?.items.find(item => item.id == itemId);
  if (!itemToBeUpdated || !category) return prev;
  const updatedItem: ListItem = { ...itemToBeUpdated, [prop]: val };
  console.log(updatedItem);
  const updatedCategory = {
    ...category,
    items: [
      ...category.items.filter(item => item.id != itemId),
      updatedItem
    ]
  }

  return {
    ...prev,
    categories: [
      ...prev.categories.filter(category => category.id != categoryId),
      updatedCategory
    ]
  }
}