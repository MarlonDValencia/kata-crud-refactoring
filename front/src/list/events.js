export const actionType  = {
    LIST_CREATED: "list.LIST_CREATED",
    LIST_FINDED: "list.LIST_FINDED",
    LIST_DELETED: "list.LIST_DELETED"
};

export default {
  saved : (item) => ({type: actionType.LIST_CREATED, item}),
  finded : (list) => ({type: actionType.LIST_FINDED, list}),
  deleted : (listId) => ({type: actionType.LIST_DELETED, listId}),
};