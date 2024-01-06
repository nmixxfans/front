'use client'

import Link from "next/link"
import signin from "../css/signin.module.css"
import { useEffect, useRef, useState } from "react"
import { KeyboardEvent } from 'react';

export default function Signin() {

    const inputRef = useRef<HTMLInputElement>(null);

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(()=>{
        // 페이지 로드되면, ID 입력란에 포커스주기
        inputRef.current?.focus();
    }, [])

    const handleSignin = ()=>{
        if(id===""){
            alert("아이디를 입력해주세요.")
        }
        else if(password===""){
            alert("비밀번호를 입력해주세요.")
        }else{

        }
    }

    const handleSigninEnter = (e:KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === "Enter"){
            if(id===""){
                alert("아이디를 입력해주세요.")
            }
            else if(password===""){
                alert("비밀번호를 입력해주세요.")
            }else{
                
            }
        }
    }

    return (
        <section className={signin.section}>
            <div className={signin.container}>
                <div className={signin.signBox}>
                    <input placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)} ref={inputRef} className={signin.input} onKeyDown={(e)=>handleSigninEnter(e)}/>
                    <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)} className={signin.input} onKeyDown={(e)=>handleSigninEnter(e)}/>
                    <div className={signin.loginBtn} onClick={handleSignin}>
                        로그인
                    </div>
                    <div className={signin.otherBtnBox}>
                        <Link href={'/signup'} className={signin.otherBtn}>회원가입</Link>
                        <Link href={'/'} className={signin.otherBtn}>ID/PW 찾기</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
