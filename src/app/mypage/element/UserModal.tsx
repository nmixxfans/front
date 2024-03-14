import my from "../mypage.module.css"

import { Dispatch, KeyboardEvent, SetStateAction, useState } from "react";

export default function UserModal({ modalOn, setModalOn, userPw, setUserPw, userNick }: { modalOn: boolean, setModalOn: Dispatch<SetStateAction<boolean>>, userPw: string, setUserPw: Dispatch<SetStateAction<string>>, userNick: string }){
    const [myData, setMyData] = useState<string>("");
    const [pw, setPw] = useState<string>("");
    const [pw2, setPw2] = useState<string>("");
    const [nick, setNick] = useState<string>("");
    const [confirmPw, setConfirmPw] = useState<boolean>(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const nickCheck = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/nick`);
        const data = await res.json();
        if (data.result) {
            setNick(data.nick);
            alert("닉네임이 변경되었습니다.");
            window.location.href = `${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage`;
        }
    };


    const confirm = async (e: KeyboardEvent<HTMLInputElement>) => {
        setDidSubmit(true);
        if (e.key === "Enter") {
            if (pw === "" || pw2 === "") {
              alert("비밀번호를 입력해주세요.")
            }
          }

        let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        if (!pwPattern.test(pw) && !pwPattern.test(pw2)) {
            alert("비밀번호  형식에 맞지 않습니다.");
        } else {
            setConfirmPw(true);
        }
        if (pw === pw2) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage/check-password`);
            const data = await res.json();
            console.log(data, "asdf")
            if (data.result) {
                console.log(data)
                setUserPw(data.pw);
                alert("비밀번호가 변경되었습니다.");
                window.location.href = `${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage`;
            }
        } else {
            alert("비밀번호가 일치하지 않습니다.");
        }
    };


    return (
        <div className={my.modalSection}>
            <div className={my.modalBack} onClick={() => setModalOn(false)}></div>
            <div className={my.modalContainer}>
                <div className={my.modalInfor}>
                    <div>닉네임</div>
                    <input value={userNick} onChange={e => setNick(e.target.value)}/>
                    <div>비밀번호</div>
                    <input type="password" placeholder="pw" onChange={e => setPw(e.target.value)} />
                    {didSubmit && (confirmPw ? <div>비밀번호가 일치합니다.</div> : <div>비밀번호가 불일치합니다.</div>)}
                    <div>비밀번호확인</div>
                    <input type="password" placeholder="pw" onChange={e => setPw2(e.target.value)} />
                    <div className={my.modalBtn} onClick={confirm}>
                        완료
                    </div>
                </div>
            </div>
        </div>

    )
}