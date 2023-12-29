'use client'

import Link from "next/link"
import signin from "../css/signin.module.css"
import { useState } from "react"

export default function Signin() {

    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <section className={signin.section}>
            <div className={signin.container}>
                <div>
                    <input placeholder="아이디" value={id} onChange={(e)=>setId(e.target.value)} />
                    <input type="password" placeholder="비밀번호" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <div>
                        <div>
                            로그인
                        </div>
                    </div>
                    <div>
                        <div>
                            <Link href={'/signup'}>회원가입</Link>
                        </div>
                        <div>
                            <Link href={'/'}>비밀번호 찾기</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
