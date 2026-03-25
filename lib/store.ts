import { create } from "zustand"

export const useEditor = create((set) => ({
  elements: [],
  selected: null,

  canvas: {
    width: 1080,
    height: 1350,
    margin: 80
  },

  setCanvas: (canvas: any) => set({ canvas }),

  addElement: (el: any) =>
    set((state: any) => ({
      elements: [...state.elements, el]
    })),

  updateElement: (id: string, props: any) =>
    set((state: any) => ({
      elements: state.elements.map((el: any) =>
        el.id === id ? { ...el, ...props } : el
      )
    })),

  select: (id: string) => set({ selected: id })
}))