import { useContext } from "react";
import * as Crypto from "expo-crypto";
import { StoreContext } from "@/app/storeContext";
import { ImplTodoItem } from "@/types";
import { deleteDataLocalByKey, storeDataLocal } from "@/utils/syncLocalData";
import { SnackbarContext } from "@/app/snackbarContext";

export const useActions = () => {
  const { todoItems, setTodoItems, setLoading } = useContext(StoreContext);

  const { setData: setSnackbarData, clearData: clearSnackbarData } =
    useContext(SnackbarContext);

  const addTodo = (title: string) => {
    if (!todoItems || !setTodoItems) return;

    const newId = Crypto.randomUUID();
    const newItem: ImplTodoItem = {
      id: newId,
      title,
      createdDate: new Date(),
    };

    storeDataLocal(newItem, `todo-${newItem.id}`);
    setSnackbarData?.({
      title: "New todo added",
      id: newId,
    });

    setTodoItems((prev) => [newItem, ...prev]);
  };

  const deleteTodo = (id: string) => {
    if (!todoItems || !setTodoItems) return;

    const foundTodoItem = todoItems.find((item) => item.id === id);

    if (!foundTodoItem) return;

    deleteDataLocalByKey(`todo-${foundTodoItem.id}`);

    setSnackbarData?.({
      title: "Todo deleted",
      id: foundTodoItem.id,
      action: () => {
        storeDataLocal(foundTodoItem, `todo-${foundTodoItem.id}`);
        const currentItems = todoItems;
        setTodoItems(currentItems);
        clearSnackbarData?.();
      },
    });

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

    setSnackbarData?.({
      title: "Todo completed",
      id: foundTodoItem.id,
      action: () => {
        storeDataLocal(foundTodoItem, `todo-${foundTodoItem.id}`);
        const currentItems = todoItems;
        setTodoItems(currentItems);
        clearSnackbarData?.();
      },
    });

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

    setSnackbarData?.({
      title: "Todo restored",
      id: foundTodoItem.id,
      action: () => {
        storeDataLocal(foundTodoItem, `todo-${foundTodoItem.id}`);
        const currentItems = todoItems;
        setTodoItems(currentItems);
        clearSnackbarData?.();
      },
    });

    setTodoItems((prev) =>
      prev.map((item) => {
        if (item.id !== updateTodoItem.id) return item;
        return updateTodoItem;
      })
    );
  };

  const deletedAllDoneTodo = async () => {
    if (!todoItems || !setTodoItems || !setLoading) return;

    const completedTodoItems = todoItems.filter((item) => item.completedDate);

    if (!completedTodoItems.length) return;

    setLoading(true);
    await Promise.all(
      completedTodoItems.map((item) => deleteDataLocalByKey(`todo-${item.id}`))
    );
    setLoading(false);

    setTodoItems((prev) => prev.filter((item) => !item.completedDate));
  };

  return {
    addTodo,
    deleteTodo,
    doneTodo,
    restoreTodo,
    deletedAllDoneTodo,
  };
};
