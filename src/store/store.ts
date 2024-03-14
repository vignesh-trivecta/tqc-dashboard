import { create, StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


interface sidebarSlice {
  currentPage: string
  setCurrentPage: (value: string) => void
}

const createSidebarSlice: StateCreator<
  sidebarSlice> = (set) => ({
  currentPage: "home",
  setCurrentPage: (value: string) => set({ currentPage: value }),
})

export const useZustStore = create<sidebarSlice >()( devtools(
  persist(
    createSidebarSlice,
    { name: 'appStore' },
  ),
),)
