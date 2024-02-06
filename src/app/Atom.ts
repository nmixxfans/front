import { atom } from "recoil";

interface UserType {
  id: number,
  userid: string,
  block: boolean,
  nick: string,
  grade: string,
}

export const userState = atom<UserType>({
  key: "sign",
  default: {
    id: 0,
    userid: "",
    block: true,
    nick: "",
    grade: "N"
  }
})

export const accessTokenState = atom({
  key: "access_token",
  default: "",
})

interface FantubeType {
  url: string,
  cover_img: string,
  sub: string,
  name: string,
  view: string,
  update_date: Date,
}

export const fantubeState = atom<FantubeType[]>({
  key: "fantube",
  default: []
})
