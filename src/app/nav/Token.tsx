'use client'

import { useEffect } from "react"
import { useRecoilState } from "recoil"
import { accessTokenState, userState } from "../Atom"

export default function Token() {

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [user, setUser] = useRecoilState(userState);

  const handleAccessToken = async () => {
    try {
      if (!accessToken) {
        console.log("refresh 실행");
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/refresh`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await res.json();
        if(data.result){
          setAccessToken(data.access_token);
        }
      }

      if (accessToken) {
        console.log("인증 실행")
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/authenticate`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ access_token: accessToken })
        })

        const data = await res.json();

        console.log("인증 후 ", data);
        if(data.result){
          setUser({
            id:data.user.id,
            userid:data.user.userid,
            block:data.user.block,
            nick:data.user.profile[0].nick,
            grade:data.user.profile[0].grade
          })
        }
      }
    }
    catch (err) {
      console.log(err);
    }


  }

  useEffect(() => {
    handleAccessToken();
  }, [accessToken])

  return <></>
}