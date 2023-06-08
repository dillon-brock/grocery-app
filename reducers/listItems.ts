import { ListItem } from "../types/types";

export type ListItemAction =
| { type: 'added', item: ListItem }
| { type: 'updated', item: ListItem, itemId: string }
| { type: 'deleted', itemId: string }

export default function listItemsReducer(items: ListItem[], action: ListItemAction): ListItem[] {
  switch (action.type) {
    case 'added': {
      return [
        ...items, action.item
      ]
    }
    case 'updated': {
      return [
        ...items.filter(item => item.id != action.itemId),
        action.item
      ]
    }
    case 'deleted': {
      return items.filter(item => item.id != action.itemId);
    }
  }
}