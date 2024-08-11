import { ImplTodoItem } from "@/types";
import { getAllKeysLocal, multiGetDataLocal } from "@/utils/syncLocalData";
import { createContext, ReactNode, useEffect, useState } from "react";

type ContextValues = {
  todoItems?: ImplTodoItem[];
  setTodoItems?: React.Dispatch<React.SetStateAction<ImplTodoItem[]>>;
  loading?: boolean;
};

export const StoreContext = createContext<ContextValues>({});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [todoItems, setTodoItems] = useState<ImplTodoItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const keys = await getAllKeysLocal();
      const data = await multiGetDataLocal<ImplTodoItem>(keys as string[]);
      if (data) {
        setTodoItems(
          data.map((item) => ({
            ...item,
            createdDate: new Date(item.createdDate),
            ...(item.completedDate && {
              completedDate: new Date(item.completedDate),
            }),
            ...(item.updatedDate && {
              updatedDate: new Date(item.updatedDate),
            }),
          }))
        );
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        todoItems,
        setTodoItems,
        loading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
