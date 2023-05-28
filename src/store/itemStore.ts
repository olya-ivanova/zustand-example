import { create } from "zustand";

interface IItem {
  item: string[];
  total: number;
  updateItem: (newItem: string) => void;
  deleteItem: (newItem: string) => void;
  updateTotal: (newTotal: number) => void;
}

const useItemStore = create<IItem>((set, get) => ({
  item: [],
  total: 0,
  updateItem: (newItem: string) => {
    const itemState = get().item;
    itemState.push(newItem);
    set({ item: itemState });
  },
  deleteItem: (newItem: string) => {
    const itemState = get().item;
    const index = itemState.indexOf(newItem);
    itemState.splice(index);
    set({ item: itemState });
  },
  updateTotal: (newTotal: number) => {
    set({ total: newTotal });
  },
}));

export { useItemStore };
