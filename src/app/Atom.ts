import { atom } from "recoil";

export const signState = atom({
    key: "sign",
    default: ""
})

interface FantubeType{
    url:string,
    cover_img:string,
    sub:string,
    name:string,
    view:string,
    update_date:Date,
}

export const fantubeState = atom<FantubeType[]>({
    key:"fantube",
    default:[]
})
