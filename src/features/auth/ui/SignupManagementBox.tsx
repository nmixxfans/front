'use client'

import styled from "styled-components"
import { SignupWrapper } from "./SignupWrapper"
import { AuthLabelInput } from "./AuthLabelInput"
import { useEffect, useRef, useState } from "react"

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const SignupButton = styled.div`
  width: 100%;
  height: 35px;
  color: #fff;
  background-color: #000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const SignupValidBox = styled.div`
  width: 100%;
  min-height: 25px;
  margin-top: -12px;
  font-size: 12px;
  color: #d0d0d0;
`

const SignupValidText = styled.div`
  
`

export function SignupManagementBox() {

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
  // 이메일 인증번호 (입력용)
  const [emailVerify, setEmailVerify] = useState<string>("");
  // 이메일 인증번호 (저장용)
  const [emailVerifySave, setEmailVerifySave] = useState<string>("");
  // 이메일 인증 체크
  const [emailVerifyCheck, setEmailVerifyCheck] = useState<boolean>(false);
  // 인증번호 전송 여부
  const [emailVerifySend, setEmailVerifySend] = useState<boolean>(false);
  // 이메일 인증 버튼 텍스트
  const [emailVerifyButton, setEmailVerifyButton] = useState<string>("인증번호 전송");


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

  const handleSignup = async () => {
    if (id === "") {
      alert("아이디를 입력해주세요.");
      inputIdRef.current?.focus();
    } else if (!idAvailabilityCheck) {
      alert("사용할 수 없는 아이디입니다.");
      inputIdRef.current?.focus();
    } else if (!idCheck) {
      alert("아이디 중복체크가 필요합니다.");
      inputIdRef.current?.focus();
    } else if (password === "") {
      alert("비밀번호를 입력해주세요.");
      inputPWRef.current?.focus();
    } else if (passwordRe === "") {
      alert("비밀번호를 재입력해주세요.");
      inputPWRRef.current?.focus();
    } else if (!passwordAvailabilityCheck) {
      alert("사용할 수 없는 비밀번호입니다.");
      inputPWRef.current?.focus();
    } else if (!passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      inputPWRef.current?.focus();
    } else if (email === "") {
      alert("이메일을 입력해주세요.");
      inputEmailRef.current?.focus();
    } else if (!emailAvailabilityCheck) {
      alert("사용할 수 없는 이메일입니다.");
      inputEmailRef.current?.focus();
    } else if (!emailCheck) {
      alert("이메일 중복체크가 필요합니다.");
      inputEmailRef.current?.focus();
    } else if (emailVerify === "") {
      alert("인증번호를 입력해주세요.");
      inputVerifyRef.current?.focus();
    } else if (!emailVerifyCheck) {
      alert("이메일 인증이 필요합니다.");
      inputVerifyRef.current?.focus();
    } else if (nick === "") {
      alert("사용할 닉네임을 입력해주세요.");
      inputNickRef.current?.focus();
    } else if (!nickAvailabilityCheck) {
      alert("사용할 수 없는 닉네임입니다.");
      inputNickRef.current?.focus();
    } else if (!nickCheck) {
      alert("닉네임 중복체크가 필요합니다.");
      inputNickRef.current?.focus();
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/signup`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userid: id, email, password, nick })
      })
      const data = await res.json();

      if (data.result) {
        alert(`${nick}님 환영합니다!`);
        window.location.href = '/signin';
      }
    }
  }

  // 아이디 유효성 검사
  // 소문자, 숫자 조합 / 4~15자리
  useEffect(() => {
    const exp = /^[a-z0-9]{4,15}$/;
    setIdAvailabilityCheck(exp.test(id));
    handleDuplicateUserid();
  }, [id])

  // 비밀번호 유효성 검사
  // 영어, 특수문자, 숫자 조합 / 8~15자리
  useEffect(() => {
    const exp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
    setPasswordAvailabilityCheck(exp.test(password));
  }, [password])

  // 비밀번호 재입력
  useEffect(() => {
    if (password === passwordRe) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  }, [passwordRe])

  // 이메일 유효성 검사
  useEffect(() => {
    const exp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    setEmailAvailabilityCheck(exp.test(email));
    setEmailVerifySend(false);
    handleDuplicateEmail();
  }, [email])

  useEffect(() => {
    // setNickAvailabilityCheck(slangCheck(nick));
    handleDuplicateNick();
  }, [nick])

  useEffect(() => {
    if (emailVerify === emailVerifySave && email.length > 0) {
      setEmailVerifyCheck(true);
      console.log("인증번호 일치")
    } else {
      setEmailVerifyCheck(false);
    }
  }, [emailVerify])



  const handleVerifyNumber = () => {
    if (emailCheck && emailAvailabilityCheck) {
      setEmailVerifySend(true);
      handleSendVerifyNumber();
    } else {
      alert("사용할 수 없는 이메일이거나, 중복체크가 필요합니다.")
    }
  }

  // 이메일 인증번호 전송
  const handleSendVerifyNumber = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/email/verify`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })
    const data = await res.json();

    if (data.result) {
      setEmailVerifyButton("재전송");
      setEmailVerifySave(data.verifyNumber);
    }
  }

  // 아이디 중복체크
  const handleDuplicateUserid = async () => {
    if (id.length < 4) {
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/userid`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userid: id })
    })
    const data = await res.json();
    if (data.result) {
      if (!data.duplicate) {
        setIdCheck(true);
      } else {
        setIdCheck(false);
      }
    }
  }

  // 이메일 중복체크
  const handleDuplicateEmail = async () => {
    if (email.length < 2) {
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/email`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })
    const data = await res.json();
    if (data.result) {
      if (!data.duplicate) {
        setEmailCheck(true);
      } else {
        setEmailCheck(false);
      }
    }
  }

  // 닉네임 중복체크
  const handleDuplicateNick = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/nick`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nick })
    })
    const data = await res.json();
    if (data.result) {
      if (!data.duplicate) {
        setNickCheck(true);
      } else {
        setNickCheck(false);
      }
    }
  }

  return (
    <Box>
      <SignupWrapper>
        <AuthLabelInput
          id="id"
          type="text"
          label="아이디"
          value={id}
          ref={inputIdRef}
          onChange={(e) => setId(e.target.value)}
        />
        {
          id.length === 0 ?
            <SignupValidBox>
              {/* <div></div> */}
            </SignupValidBox>
            :
            idAvailabilityCheck ?
              idCheck ?
                <SignupValidBox>
                  <SignupValidText>사용할 수 있는 아이디입니다.</SignupValidText>
                </SignupValidBox>
                :
                <SignupValidBox>
                  <SignupValidText>중복된 아이디입니다.</SignupValidText>
                </SignupValidBox>
              :
              <SignupValidBox>
                <SignupValidText>아이디는 4자리 이상의 영어 소문자, 숫자가 포함되어야 합니다.</SignupValidText>
              </SignupValidBox>
        }
      </SignupWrapper>

      <SignupWrapper>
        <AuthLabelInput
          id="pw"
          value={password}
          ref={inputPWRef}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          label="비밀번호"
        />
        {password.length === 0 ?
          <SignupValidBox>
            <SignupValidText></SignupValidText>
          </SignupValidBox>
          :
          passwordAvailabilityCheck ?
            <SignupValidBox>
              <SignupValidText>사용할 수 있는 비밀번호입니다.</SignupValidText>
            </SignupValidBox>
            :
            <SignupValidBox>
              <SignupValidText>비밀번호는 8자리 이상 영어, 숫자, 특수문자를 조합해 만들 수 있습니다.</SignupValidText>
            </SignupValidBox>
        }
      </SignupWrapper>
      <SignupWrapper>
        <AuthLabelInput
          id="pwr"
          value={passwordRe}
          ref={inputPWRRef}
          onChange={(e) => setPasswordRe(e.target.value)}
          type="password"
          label="재입력"
        />
        {passwordRe.length === 0 ?
          <SignupValidBox>
            <SignupValidText />
          </SignupValidBox>
          :
          passwordCheck ?
            <SignupValidBox>
              <SignupValidText>비밀번호가 일치합니다.</SignupValidText>
            </SignupValidBox>
            :
            <SignupValidBox>
              <SignupValidText>비밀번호가 일치하지 않습니다.</SignupValidText>
            </SignupValidBox>
        }
      </SignupWrapper>

      <SignupWrapper>
        <AuthLabelInput
          id="email"
          value={email}
          ref={inputEmailRef}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          label="이메일"
          verify={emailVerifyButton}
          isEmail={true}
        />
        {email.length === 0 ?
          <SignupValidBox>
            <SignupValidText />
          </SignupValidBox>
          : emailAvailabilityCheck ?
            emailCheck ?
              <SignupValidBox>
                <SignupValidText>사용할 수 있는 이메일입니다.</SignupValidText>
              </SignupValidBox>
              :
              <SignupValidBox>
                <SignupValidText>중복된 이메일입니다.</SignupValidText>
              </SignupValidBox>
            :
            <SignupValidBox>
              <SignupValidText>이메일 형식을 입력해주세요.</SignupValidText>
            </SignupValidBox>
        }

        {
          emailVerifySend ?
            <>
              {/* <div className={signup.VerifyValidBox}>
                <input placeholder='인증번호'
                  value={emailVerify}
                  ref={inputVerifyRef}
                  onChange={(e) => setEmailVerify(e.target.value)}
                  className={signup.input}
                  maxLength={6}
                />
              </div> */}
              {emailVerify.length === 0 ?
                <SignupValidBox>
                  <SignupValidText />
                </SignupValidBox>
                :
                emailVerifyCheck ?
                  <SignupValidBox>
                    <SignupValidText>인증번호가 일치합니다.</SignupValidText>
                  </SignupValidBox>
                  :
                  <SignupValidBox>
                    <SignupValidText>인증번호가 일치하지 않습니다.</SignupValidText>
                  </SignupValidBox>
              }
            </>
            :
            <></>
        }
      </SignupWrapper>


      <SignupWrapper>
        <AuthLabelInput
          id="nick"
          value={nick}
          ref={inputNickRef}
          onChange={(e) => setNick(e.target.value)}
          type="text"
          label="닉네임"
        />
        {nick.length === 0 ?
          <SignupValidBox>
            <div></div>
          </SignupValidBox>
          : nickAvailabilityCheck ?
            nickCheck ?
              <SignupValidBox>
                <SignupValidText>사용할 수 있는 닉네임입니다.</SignupValidText>
              </SignupValidBox>
              :
              <SignupValidBox>
                <SignupValidText>중복된 닉네임입니다.</SignupValidText>
              </SignupValidBox>
            :
            <SignupValidBox>
              <SignupValidText>사용할 수 없는 닉네임입니다.</SignupValidText>
            </SignupValidBox>
        }
      </SignupWrapper>

      <SignupButton onClick={handleSignup}>
        회원가입
      </SignupButton>
    </Box>
  )
}