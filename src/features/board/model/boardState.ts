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