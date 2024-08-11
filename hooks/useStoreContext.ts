import { useContext } from "react";
import * as Crypto from "expo-crypto";
import { StoreContext } from "@/app/storeContext";
import { ImplTodoItem } from "@/types";
import { deleteDataLocalByKey, storeDataLocal } from "@/utils/syncLocalData";

export const useStoreContext = () => {
  const { todoItems, setTodoItems } = useContext(StoreContext);

  const addTodo = (title: string) => {
    if (!todoItems || !setTodoItems) return;

    const newId = Crypto.randomUUID();
    const newItem: ImplTodoItem = {
      id: newId,
      title,
      createdDate: new Date(),
    };

    storeDataLocal(newItem, `todo-${newItem.id}`);

    setTodoItems((prev) => [newItem, ...prev]);
  };

  const deleteTodo = (id: string) => {
    if (!todoItems || !setTodoItems) return;

    const foundTodoItem = todoItems.find((item) => item.id === id);

    if (!foundTodoItem) return;

    deleteDataLocalByKey(`todo-${foundTodoItem.id}`);

    setTodoItems((prev) => prev.filter((item) => item.id !== foundTodoItem.id));
  };

  const doneTodo = (id: string) => {
    if (!todoItems || !setTodoItems) return;

    const foundTodoItem = todoItems.find((item) => item.id === id);

    if (!foundTodoItem) return;

    const updateTodoItem: ImplTodoItem = {
      ...foundTodoItem,
      completedDate: new Date(),
      updatedDate: new Date(),
    };

    storeDataLocal(updateTodoItem, `todo-${updateTodoItem.id}`);

    setTodoItems((prev) =>
      prev.map((item) => {
        if (item.id !== updateTodoItem.id) return item;
        return updateTodoItem;
      })
    );
  };

  const restoreTodo = (id: string) => {
    if (!todoItems || !setTodoItems) return;

    const foundTodoItem = todoItems.find((item) => item.id === id);

    if (!foundTodoItem) return;

    const updateTodoItem: ImplTodoItem = {
      ...foundTodoItem,
      updatedDate: new Date(),
      completedDate: undefined,
    };

    storeDataLocal(updateTodoItem, `todo-${updateTodoItem.id}`);

    setTodoItems((prev) =>
      prev.map((item) => {
        if (item.id !== updateTodoItem.id) return item;
        return updateTodoItem;
      })
    );
  };

  return {
    addTodo,
    deleteTodo,
    doneTodo,
    restoreTodo,
  };
};
