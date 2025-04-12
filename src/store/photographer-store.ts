import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Photographer, defaultPhotographers } from "@/data/photographets";

interface PhotographerState {
  photographers: Photographer[];
  addPhotographer: (photographer: Omit<Photographer, "id" | "rating">) => void;
  updatePhotographer: (id: string, photographer: Partial<Photographer>) => void;
  deletePhotographer: (id: string) => void;
  getPhotographer: (id: string) => Photographer | undefined;
}

export const usePhotographerStore = create<PhotographerState>()(
  persist(
    (set, get) => ({
      photographers: defaultPhotographers,

      addPhotographer: (photographer) => {
        const newId = (get().photographers.length + 1).toString();
        const newPhotographer: Photographer = {
          ...photographer,
          id: newId,
          rating: Math.floor(Math.random() * 5) + 1,
        };
        set((state) => ({
          photographers: [...state.photographers, newPhotographer],
        }));
      },

      updatePhotographer: (id, updates) => {
        set((state) => ({
          photographers: state.photographers.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        }));
      },

      deletePhotographer: (id) => {
        set((state) => ({
          photographers: state.photographers.filter((p) => p.id !== id),
        }));
      },

      getPhotographer: (id) => {
        return get().photographers.find((p) => p.id === id);
      },
    }),
    {
      name: "photographer-storage",
    }
  )
);
