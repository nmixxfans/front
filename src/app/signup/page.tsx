'use client'

import { useState } from 'react'
import signup from '../css/signup.module.css'

export default function Signup() {

    const [id, setId] = useState<string>("");
    const [idAvailabilityCheck, setIdAvailabilityCheck] = useState<boolean>(false);
    const [idCheck, setIdCheck] = useState<boolean>(false);

    const [password, setPassword] = useState<string>("");
    const [passwordRe, setPasswordRe] = useState<string>("");
    const [passwordAvailabilityCheck, setPasswordAvailabilityCheck] = useState<boolean>(false);
    const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    const [emailAvailabilityCheck, setEmailAvailabilityCheck] = useState<boolean>(false);
    
    const [nick, setNick] = useState<string>("");
    const [nickCheck, setNickCheck] = useState<boolean>(false);
    const [nickAvailabilityCheck, setNickAvailabilityCheck] = useState<boolean>(false);

    return (
        <section className={signup.section}>
            <div className={signup.container}>
                <input placeholder='아이디' value={id} onChange={(e)=>setId(e.target.value)}/>
                <input type='password' placeholder='비밀번호' value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input type='password' placeholder='비밀번호 재입력' value={passwordRe} onChange={(e)=>setPasswordRe(e.target.value)} />
                <input placeholder='이메일' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder='닉네임' value={nick} onChange={(e)=>setNick(e.target.value)} />
            </div>
        </section>
    )
}
