export type ImplTodoItem = {
  id: string;
  title: string;
  createdDate: Date;
  updatedDate?: Date;
  completedDate?: Date;
  // deletedDate?: Date;
};

export type ImplSnackItem = {
  title: string;
  id: string;
  action?: () => void;
};
