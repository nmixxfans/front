'use client'

import styled from "styled-components"
import { AuthInput } from "./AuthInput"
import Link from "next/link"
import { KeyboardEvent, useEffect, useRef, useState } from "react"

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

const SigninButton = styled.div`
  width: 100%;
  height: 35px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  user-select: none;
  border-radius: 5px;
`

const SigninLinkBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`

const SigninLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
  width: 100%;
  height: 30px;
  color: #000;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export function SigninManagementBox() {

  // 아이디 input
  const idRef = useRef<HTMLInputElement>(null);

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const [accessToken, setAcessToken] = useRecoilState<string>(accessTokenState);


  useEffect(() => {
    // 페이지 로드되면, ID 입력란에 포커스주기
    idRef.current?.focus();
  }, [])

  const handleInputLength = () => {
    if (id === "") {
      alert("아이디를 입력해주세요.")
    }
    else if (password === "") {
      alert("비밀번호를 입력해주세요.")
    } else {
      postSignin()
    }
  }

  const handleSigninEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (id === "") {
        alert("아이디를 입력해주세요.")
      }
      else if (password === "") {
        alert("비밀번호를 입력해주세요.")
      } else {
        postSignin()
      }
    }
  }

  const postSignin = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/signin`, {
      method: "POST",
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid: id, password })
    })
    const data = await res.json();

    if (data.message === 'login success') {
      // setAcessToken(data.access_token);
      window.location.href = '/'
    }
  }
  return (
    <Box>
      {/* 아이디 */}
      <AuthInput
        ref={idRef}
        value={id}
        placeholder={"아이디"}
        onChange={(e) => setId(e.target.value)}
        onKeyDown={(e) => handleSigninEnter(e)}
        type={"text"}
      />
      {/* 비밀번호 */}
      <AuthInput
        type="password"
        placeholder={"비밀번호"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={(e) => handleSigninEnter(e)}
      />
      <SigninButton onClick={handleInputLength}>로그인</SigninButton>
      <SigninLinkBox>
        <SigninLink href={'/signup'}>회원가입</SigninLink>
        <SigninLink href={'/'}>ID/PW 찾기</SigninLink>
      </SigninLinkBox>
    </Box>
  )
}