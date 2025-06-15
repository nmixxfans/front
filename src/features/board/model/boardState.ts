'use client'

import { atom } from "recoil";

export const categoryState = atom<string>({
  key: "category",
  default: "all",
})

export const pageState = atom<number>({
  key: "page",
  default: 1,
})

export const searchState = atom<string>({
  key: "search",
  default: ""
})

export const searchTypeState = atom<string>({
  key: "search_type",
  default: ""
})