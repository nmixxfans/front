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