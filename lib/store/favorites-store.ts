import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface FavoritesState {
  items: FavoriteItem[];
  addItem: (item: FavoriteItem) => void;
  removeItem: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
  getTotalFavorites: () => number;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) => {
        const items = get().items;
        const exists = items.find((i) => i.id === item.id);

        if (!exists) {
          set({
            items: [...items, item],
          });
        }
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },

      isFavorite: (id) => {
        return get().items.some((item) => item.id === id);
      },

      toggleFavorite: (item) => {
        const isFav = get().isFavorite(item.id);
        if (isFav) {
          get().removeItem(item.id);
        } else {
          get().addItem(item);
        }
      },

      getTotalFavorites: () => {
        return get().items.length;
      },
    }),
    {
      name: "favorites-storage",
    },
  ),
);
