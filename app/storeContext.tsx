import { ImplTodoItem } from "@/types";
import { createContext, ReactNode, useState } from "react";

type ContextValues = {
  todoItems?: ImplTodoItem[];
  setTodoItems?: React.Dispatch<React.SetStateAction<ImplTodoItem[]>>;
};

export const StoreContext = createContext<ContextValues>({});

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [todoItems, setTodoItems] = useState<ImplTodoItem[]>([]);

  return (
    <StoreContext.Provider
      value={{
        todoItems,
        setTodoItems,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
