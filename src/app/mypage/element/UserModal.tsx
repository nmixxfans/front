import { useRecoilValue } from "recoil";
import styles from "../mypage.module.css"
import { Dispatch, KeyboardEvent, SetStateAction, useEffect, useState } from "react";
import { userState } from "@/app/Atom";
import { slangCheck } from "@/app/asset/functions/slang";

export default function UserModal({ setModalOn, setUserPassword }: { setModalOn: Dispatch<SetStateAction<boolean>>, setUserPassword: Dispatch<SetStateAction<string>> }) {

  const sign = useRecoilValue(userState);

  useEffect(() => {
    setOriginalNick(sign.nick);
    setNick(sign.nick);
  }, [sign])

  // 원래 닉네임
  const [originalNick, setOriginalNick] = useState<string>("");

  // 닉네임
  const [nick, setNick] = useState<string>("");
  // 닉네임 중복체크
  const [nickCheck, setNickCheck] = useState<boolean>(true);
  // 닉네임 유효성검사
  const [nickAvailabilityCheck, setNickAvailabilityCheck] = useState<boolean>(true);


  // 비밀번호
  const [password, setPassword] = useState<string>("");
  // 비밀번호 재입력
  const [passwordRe, setPasswordRe] = useState<string>("");
  // 비밀번호 유효성검사
  const [passwordAvailabilityCheck, setPasswordAvailabilityCheck] = useState<boolean>(false);
  // 비밀번호 일치 여부 확인
  const [passwordCheck, setPasswordCheck] = useState<boolean>(false);

  useEffect(() => {
    setNickAvailabilityCheck(slangCheck(nick));
    handleNicknameCheck();
  }, [nick])

  // 비밀번호 유효성 검사
  // 영어, 특수문자, 숫자 조합 / 8~15자리
  useEffect(() => {
    if (password.length === 0 && passwordRe.length === 0) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false)
      const exp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/
      setPasswordAvailabilityCheck(exp.test(password));
    }
  }, [password])

  // 비밀번호 재입력
  useEffect(() => {
    if (password.length === 0 && passwordRe.length === 0) {
      setPasswordCheck(true);
    } else {
      if (password === passwordRe) {
        setPasswordCheck(true);
      } else {
        setPasswordCheck(false);
      }
    }
  }, [passwordRe])

  // 닉네임 중복체크
  const handleNicknameCheck = async () => {
    if (originalNick === nick) {
      setNickCheck(true);
      setPasswordAvailabilityCheck(true);
      return;
    }

    if (originalNick !== nick) {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/nick`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nick })
      });
      const data = await res.json();
      console.log(data);
      if (data.result) {
        if (!data.duplicate) {
          setNickCheck(true);
        } else {
          setNickCheck(false);
        }
      }
    }

  };


  const handleUpdate = async () => {
    if (nick === "") {
      alert("사용할 닉네임을 입력해주세요.");
    } else if (!passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
    } else if (!nickAvailabilityCheck) {
      alert("사용할 수 없는 닉네임입니다.");
    } else if (!nickCheck) {
      alert("닉네임 중복체크가 필요합니다.");
    } else {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nick, password, id: sign.id })
      });
      const data = await res.json();
      if (data.result) {
        alert("회원정보가 수정됐습니다.")
        location.reload();
      } else {
        alert("오류가 발생했습니다.")
      }
    }

  };


  return (
    <div className={styles.modalSection}>
      <div className={styles.modalBack} onClick={() => setModalOn(false)}></div>
      <div className={styles.modalContainer}>
        <div className={styles.modalInformationBox}>
          <div className={styles.modalElementBox}>
            <div className={styles.modalTitle}>회원정보 수정</div>
          </div>
          <div className={styles.modalElementBox}>
            <div className={styles.modalElementName}>닉네임</div>
            <input value={nick} onChange={e => setNick(e.target.value)} className={styles.modalInput} placeholder="닉네임" />
            {nick.length === 0 || originalNick === nick ?
              <div className={styles.ValidBox}>
                <div></div>
              </div>
              : nickAvailabilityCheck ?
                nickCheck ?
                  <div className={styles.ValidBox}>
                    <div className={styles.validTrue}>사용할 수 있는 닉네임입니다.</div>
                  </div>
                  :
                  <div className={styles.ValidBox}>
                    <div className={styles.validFalse}>중복된 닉네임입니다.</div>
                  </div>
                :
                <div className={styles.ValidBox}>
                  <div className={styles.validFalse}>사용할 수 없는 닉네임입니다.</div>
                </div>
            }
          </div>
          <div className={styles.modalElementBox}>
            <div className={styles.modalElementName}>비밀번호</div>
            <input type="password" placeholder="비밀번호" onChange={e => setPassword(e.target.value)} className={styles.modalInput} />
            {password.length === 0 ?
              <div className={styles.ValidBox}>
                <div></div>
              </div>
              :
              passwordAvailabilityCheck ?
                <div className={styles.ValidBox}>
                  <div className={styles.validTrue}>사용할 수 있는 비밀번호입니다.</div>
                </div>
                :
                <div className={styles.ValidBox}>
                  <div className={styles.validFalse}>비밀번호는 8자리 이상 영어, 숫자, 특수문자를 조합해 만들 수 있습니다.</div>
                </div>
            }
          </div>
          <div className={styles.modalElementBox}>
            <div className={styles.modalElementName}>비밀번호확인</div>
            <input type="password" placeholder="비밀번호 확인" onChange={e => setPasswordRe(e.target.value)} className={styles.modalInput} />
            {passwordRe.length === 0 ?
              <div className={styles.ValidBox}>
                <div></div>
              </div>
              :
              passwordCheck ?
                <div className={styles.ValidBox}>
                  <div className={styles.validTrue}>비밀번호가 일치합니다.</div>
                </div>
                :
                <div className={styles.ValidBox}>
                  <div className={styles.validFalse}>비밀번호가 일치하지 않습니다.</div>
                </div>
            }
          </div>
          <button className={styles.modalBtn} onClick={handleUpdate}>수정</button>
        </div>
      </div>
    </div>

  )
}