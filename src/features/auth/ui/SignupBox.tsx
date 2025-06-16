'use client'

import styled from "styled-components"

const Box = styled.div`
  width: 450px;
  min-height: 500px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`

export function SignupBox() {
  return (
    <Box>
      <div className={signup.inputBox}>
        <label className={signup.label} htmlFor='id'>아이디</label>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          ref={inputIdRef}
          className={signup.input}
          id='id'
        />
        {
          id.length === 0 ?
            <div className={signup.ValidBox}>
              <div></div>
            </div>
            :
            idAvailabilityCheck ?
              idCheck ?
                <div className={signup.ValidBox}>
                  <div>사용할 수 있는 아이디입니다.</div>
                </div>
                :
                <div className={signup.ValidBox}>
                  <div>중복된 아이디입니다.</div>
                </div>
              :
              <div className={signup.ValidBox}>
                <div>아이디는 4자리 이상 영어 소문자, 숫자를 조합해 만들 수 있습니다.</div>
              </div>
        }
      </div>
      <div className={signup.inputBox}>
        <label className={signup.label} htmlFor='pw'>비밀번호</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={inputPWRef}
          className={signup.input}
          id='pw'
        />
        {password.length === 0 ?
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
        <input
          type='password'
          value={passwordRe}
          onChange={(e) => setPasswordRe(e.target.value)}
          ref={inputPWRRef}
          className={signup.input}
          id='pwr'
        />
        {passwordRe.length === 0 ?
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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={inputEmailRef} className={signup.inputEmail}
            id='email'
          />
          <div className={signup.verifySendBtn} onClick={handleVerifyNumber}>{emailVerifyButton}</div>
        </div>
        {email.length === 0 ?
          <div className={signup.ValidBox}>
            <div></div>
          </div>
          : emailAvailabilityCheck ?
            emailCheck ?
              <div className={signup.ValidBox}>
                <div>사용할 수 있는 이메일입니다.</div>
              </div>
              :
              <div className={signup.ValidBox}>
                <div>중복된 이메일입니다.</div>
              </div>
            :
            <div className={signup.ValidBox}>
              <div>이메일 형식을 입력해주세요.</div>
            </div>
        }

        {
          emailVerifySend ?
            <>
              <div className={signup.VerifyValidBox}>
                <input placeholder='인증번호'
                  value={emailVerify}
                  ref={inputVerifyRef}
                  onChange={(e) => setEmailVerify(e.target.value)}
                  className={signup.input}
                  maxLength={6}
                />
              </div>
              {emailVerify.length === 0 ?
                <div className={signup.ValidBox}>
                  <div></div>
                </div>
                :
                emailVerifyCheck ?
                  <div className={signup.ValidBox}>
                    <div>인증번호가 일치합니다.</div>
                  </div>
                  :
                  <div className={signup.ValidBox}>
                    <div>인증번호가 일치하지 않습니다.</div>
                  </div>
              }
            </>
            :
            <></>
        }
      </div>


      <div className={signup.inputBox}>
        <label className={signup.label} htmlFor='nick'>닉네임</label>
        <input value={nick}
          onChange={(e) => setNick(e.target.value)}
          ref={inputNickRef}
          className={signup.input}
          id='nick'
        />
        {nick.length === 0 ?
          <div className={signup.ValidBox}>
            <div></div>
          </div>
          : nickAvailabilityCheck ?
            nickCheck ?
              <div className={signup.ValidBox}>
                <div>사용할 수 있는 닉네임입니다.</div>
              </div>
              :
              <div className={signup.ValidBox}>
                <div>중복된 닉네임입니다.</div>
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
    </Box>
  )
}