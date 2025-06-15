'use client'

import { atom } from "recoil";

export type Country = "ko" | "fo";
export type Sort = "sub" | "name" | "view";

export interface FantubeType {
    url: string,
    coverImg: string,
    sub: string,
    name: string,
    view: string,
    updateDate: Date,
}

export const fantubeState = atom<FantubeType[]>({
    key: "fantube",
    default: []
})