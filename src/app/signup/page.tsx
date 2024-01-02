'use client'

import { useEffect, useRef, useState } from 'react'
import signup from '../css/signup.module.css'
import slang from '../slang';

export default function Signup() {

    const [id, setId] = useState<string>("");
    // 아이디 유효성검사
    const [idAvailabilityCheck, setIdAvailabilityCheck] = useState<boolean>(false);
    // 아이디 중복체크
    const [idCheck, setIdCheck] = useState<boolean>(false);
    

    const [password, setPassword] = useState<string>("");
    // 비밀번호 재입력
    const [passwordRe, setPasswordRe] = useState<string>("");
    // 비밀번호 유효성검사
    const [passwordAvailabilityCheck, setPasswordAvailabilityCheck] = useState<boolean>(false);
    // 비밀번호 일치 여부 확인
    const [passwordCheck, setPasswordCheck] = useState<boolean>(false);
    

    const [email, setEmail] = useState<string>("");
    // 이메일 중복체크
    const [emailCheck, setEmailCheck] = useState<boolean>(false);
    // 이메일 유효성검사
    const [emailAvailabilityCheck, setEmailAvailabilityCheck] = useState<boolean>(false);
    // 이메일 인증번호
    const [emailVerify, setEmailVerify] = useState<string>("");
    // 이메일 인증 체크
    const [emailVerifyCheck, setEmailVerifyCheck] = useState<boolean>(false);
    // 인증번호 전송 여부
    const [emailVerifySend, setEmailVerifySend] = useState<boolean>(false);

 
    const [nick, setNick] = useState<string>("");
    // 닉네임 중복체크
    const [nickCheck, setNickCheck] = useState<boolean>(false);
    // 닉네임 유효성검사
    const [nickAvailabilityCheck, setNickAvailabilityCheck] = useState<boolean>(false);
    

    // useRef
    const inputIdRef = useRef<HTMLInputElement>(null);
    const inputPWRef = useRef<HTMLInputElement>(null);
    const inputPWRRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputVerifyRef = useRef<HTMLInputElement>(null);
    const inputNickRef = useRef<HTMLInputElement>(null);

    const handleSignup = ()=>{
        if(id===""){
            alert("아이디를 입력해주세요.");
            inputIdRef.current?.focus();
        }else if(!idAvailabilityCheck){
            alert("사용할 수 없는 아이디입니다.");
            inputIdRef.current?.focus();
        }else if(!idCheck){
            alert("아이디 중복체크가 필요합니다.");
            inputIdRef.current?.focus();
        }else if(password===""){
            alert("비밀번호를 입력해주세요.");
            inputPWRef.current?.focus();
        }else if(passwordRe===""){
            alert("비밀번호를 재입력해주세요.");
            inputPWRRef.current?.focus();
        }else if(!passwordAvailabilityCheck){
            alert("사용할 수 없는 비밀번호입니다.");
            inputPWRef.current?.focus();
        }else if(!passwordCheck){
            alert("비밀번호가 일치하지 않습니다.");
            inputPWRef.current?.focus();
        }else if(email===""){
            alert("이메일을 입력해주세요.");
            inputEmailRef.current?.focus();
        }else if(!emailAvailabilityCheck){
            alert("사용할 수 없는 이메일입니다.");
            inputEmailRef.current?.focus();
        }else if(!emailCheck){
            alert("이메일 중복체크가 필요합니다.");
            inputEmailRef.current?.focus();
        }else if(emailVerify===""){
            alert("인증번호를 입력해주세요.");
            inputVerifyRef.current?.focus();
        }else if(!emailVerifyCheck){
            alert("이메일 인증이 필요합니다.");
            inputVerifyRef.current?.focus();
        }else if(nick===""){
            alert("사용할 닉네임을 입력해주세요.");
            inputNickRef.current?.focus();
        }else if(!nickAvailabilityCheck){
            alert("사용할 수 없는 닉네임입니다.");
            inputNickRef.current?.focus();
        }else if(!nickCheck){
            alert("닉네임 중복체크가 필요합니다.");
            inputNickRef.current?.focus();
        }else{
            console.log("회원가입")
        }
    }

    // 아이디 유효성 검사
    // 소문자, 숫자 조합 / 4~15자리
    useEffect(()=>{
        const exp = /^[a-z0-9]{4,15}$/;
        setIdAvailabilityCheck(exp.test(id));
        setIdCheck(false);
    }, [id])

    // 비밀번호 유효성 검사
    // 영어, 특수문자, 숫자 조합 / 8~15자리
    useEffect(()=>{
        const exp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
        setPasswordAvailabilityCheck(exp.test(password));
    }, [password])

    // 비밀번호 재입력
    useEffect(()=>{
        if(password===passwordRe){
            setPasswordCheck(true);
        }else{
            setPasswordCheck(false);
        }
    }, [passwordRe])

    // 이메일 유효성 검사
    useEffect(()=>{
        const exp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        setEmailAvailabilityCheck(exp.test(email));
        setEmailCheck(false);
        setEmailVerifySend(false);
    }, [email])

    useEffect(()=>{
        setNickAvailabilityCheck(slangCheck());
    }, [nick])

    const slangCheck = ()=>{
        let result:boolean = true;

        if(slang.indexOf(nick)>-1){
            result = false;
        }else{
            result = true;
        }
        return result
    }

    const handleVerifyNumber = ()=>{
        if(emailCheck){
            setEmailVerifySend(true);
        }else{
            alert("이메일 중복체크가 필요합니다.")
        }
    }

    return (
        <section className={signup.section}>
            <div className={signup.container}>
                <div className={signup.signupBox}>
                    <div className={signup.inputBox}>
                        <label className={signup.label} htmlFor='id'>아이디</label>
                        <input value={id} onChange={(e)=>setId(e.target.value)} ref={inputIdRef} className={signup.input} id='id'/>
                        { id.length === 0 ?
                            <div className={signup.ValidBox}>
                                <div></div>
                            </div>
                            :
                            idAvailabilityCheck ?
                                <div className={signup.ValidBox}>
                                    <div>사용할 수 있는 아이디입니다.</div>
                                </div>
                            :
                                <div className={signup.ValidBox}>
                                    <div>아이디는 4자리 이상 영어 소문자, 숫자를 조합해 만들 수 있습니다.</div>
                                </div>
                        }
                    </div>
                    <div className={signup.inputBox}>
                        <label className={signup.label} htmlFor='pw'>비밀번호</label>
                        <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} ref={inputPWRef} className={signup.input} id='pw'/>
                        { password.length === 0 ?
                            <div className={signup.ValidBox}>
                                <div></div>
                            </div>
                            :
                            passwordAvailabilityCheck ?
                                <div className={signup.ValidBox}>
                                    <div>사용할 수 있는 비밀번호입니다.</div>
                                </div>
                            :
                                <div className={signup.ValidBox}>
                                    <div>비밀번호는 8자리 이상 영어, 숫자, 특수문자를 조합해 만들 수 있습니다.</div>
                                </div>
                        }
                    </div>
                    <div className={signup.inputBox}>
                        <label className={signup.label} htmlFor='pwr'>비밀번호 재입력</label>
                        <input type='password' value={passwordRe} onChange={(e)=>setPasswordRe(e.target.value)} ref={inputPWRRef} className={signup.input} id='pwr'/>
                        { passwordRe.length === 0 ?
                            <div className={signup.ValidBox}>
                                <div></div>
                            </div>
                            :
                            passwordCheck ?
                                <div className={signup.ValidBox}>
                                    <div>비밀번호가 일치합니다.</div>
                                </div>
                            :
                                <div className={signup.ValidBox}>
                                    <div>비밀번호가 일치하지 않습니다.</div>
                                </div>
                        }
                    </div>
                    
                    
                    <div className={signup.inputBox}>
                        <label className={signup.label} htmlFor='email'>이메일</label>
                        <div className={signup.emailBox}>
                            <input value={email} onChange={(e)=>setEmail(e.target.value)} ref={inputEmailRef} className={signup.inputEmail} id='email' />
                            <div className={signup.verifySendBtn} onClick={handleVerifyNumber}>인증번호 전송</div>
                        </div>
                        { email.length === 0 ?
                            <div className={signup.ValidBox}>
                                <div></div>
                            </div>
                            : emailAvailabilityCheck ?
                                <div className={signup.ValidBox}>
                                    <div>사용할 수 있는 비밀번호입니다.</div>
                                </div>
                            :
                                <div className={signup.ValidBox}>
                                    <div>이메일 형식을 입력해주세요.</div>
                                </div>
                        }

                        {
                            emailVerifySend ?
                            <div className={signup.ValidBox}>
                                <input placeholder='인증번호' value={emailVerify} ref={inputVerifyRef} onChange={(e)=>setEmailVerify(e.target.value)} className={signup.input}/>
                            </div>
                            :
                            <></>
                        }
                    </div>
                    
                    
                    <div className={signup.inputBox}>
                        <label className={signup.label} htmlFor='nick'>닉네임</label>
                        <input value={nick} onChange={(e)=>setNick(e.target.value)} ref={inputNickRef} className={signup.input} id='nick'/>
                        { nick.length === 0 ?
                            <div className={signup.ValidBox}>
                                <div></div>
                            </div>
                            : nickAvailabilityCheck ?
                                <div className={signup.ValidBox}>
                                    <div>사용할 수 있는 닉네임입니다.</div>
                                </div>
                            :
                                <div className={signup.ValidBox}>
                                    <div>사용할 수 없는 닉네임입니다.</div>
                                </div>
                        }
                    </div>

                    <div className={signup.signupBtn} onClick={handleSignup}>
                        회원가입
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}
