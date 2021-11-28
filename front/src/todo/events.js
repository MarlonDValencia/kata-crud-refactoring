export const actionType  = {
    LIST_CREATED: "item.LIST_CREATED",
    LIST_UPDATED: "item.LIST_UPDATED",
    LIST_FINDED: "item.LIST_FINDED",
    LIST_DELETED: "item.LIST_DELETED",
    LIST_ON_EDITED: "item.LIST_ON_EDITED"

};

export default {
  saved : (listId, item) => ({type: actionType.LIST_CREATED, item, listId}),
  deleted : (listId, itemId) => ({type: actionType.LIST_DELETED, itemId, listId}),
  updated : (listId, item) => ({type: actionType.LIST_UPDATED, item, listId}),
  onEdited : (listId, item) => ({type: actionType.LIST_ON_EDITED, item, listId}),
  finded : (listId, items) => ({type: actionType.LIST_FINDED, items, listId})
};