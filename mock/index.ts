import { ImplTodoItem } from "@/types";
import * as Crypto from "expo-crypto";

export const mockTodoItems: ImplTodoItem[] = Array(100)
  .fill(0)
  .map((_, index) => ({
    id: Crypto.randomUUID(),
    title: `Todo ${index + 1}th`,
    createdDate: new Date(),
  }));
