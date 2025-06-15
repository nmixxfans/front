'use client'

import { atom } from "recoil";

export const categoryState = atom<string>({
  key: "fanchannel_category",
  default: "ko",
})

export const sortState = atom<string>({
  key: "fanchannel_sort",
  default: "sub"
})