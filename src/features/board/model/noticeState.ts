'use client'

import { atom } from "recoil";

export const noticePageState = atom<number>({
  key: "notice_page",
  default: 1,
})

export const noticeSearchState = atom<string>({
  key: "notice_search",
  default: "",
})

export const noticeSearchTypeState = atom<string>({
  key: "notice_search_type",
  default: "",
})