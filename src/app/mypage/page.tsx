"use client"

import my from "./mypage.module.css";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Pagination from "react-js-pagination";
import "../css/pagination.css";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../Atom";
import { KeyboardEvent } from 'react';

function Modal({ modalOn, setModalOn, userPw, setUserPw, userNick }: { modalOn: boolean, setModalOn: Dispatch<SetStateAction<boolean>>, userPw: string, setUserPw: Dispatch<SetStateAction<string>>, userNick: string }) {

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
                    <input value={userNick} onChange={e => setNick(e.target.value)} />
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

interface Board {
    board: string,
    boardCount: number
}

interface Comment {
    comment: string,
    commentCount: number
}

interface Datas {
    boards: { board: Board[], boardCount: number },
    comments: { comment: Comment[], commentCount: number },
    result: boolean,
    user: {
        block: boolean;
        email: string;
        id: number;
        profile: {
            cover_img: string;
            create_date: string;
            grade: string;
            nick: string;
        }[]
        userId: string;
    }
}

export default function Mypage(props: Params) {

    const [userEmail, setUserEmail] = useState<string>("");
    const [userCreate, setUserCreate] = useState<string>("");
    const [userImg, setUserImg] = useState<any>("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [myBoards, setMyBoards] = useState<Board[]>([]);
    const [userPw, setUserPw] = useState<string>("");
    const [userNick, setUserNICK] = useState<string>("");
    const [page, setPage] = useState<number>(1); //페이지
    const [page2, setPage2] = useState<number>(1); //페이지
    const [modalOn, setModalOn] = useState<boolean>(false);
    const [accessToken, setAcessToken] = useRecoilState<string>(accessTokenState);




    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage?access_token=${accessToken}`);
        const data = await res.json() as Datas;
        console.log(data, "aaaa")
        if (data.result) {
            setMyBoards(data.boards.board);
            setComments(data.comments.comment);
            setUserNICK(data.user.profile[0].nick);
            setUserImg(data.user.profile[0].cover_img);
            setUserCreate(data.user.profile[0].create_date);
            setUserEmail(data.user.email);
            
        }
    }

    useEffect(() => {
        setMyBoards(myBoards);
        setComments(comments);
        getData()
    }, [accessToken]);


    const handlePageChange = (page: number) => {
        setPage(page);
        console.log(page);
    };
    const handlePageChange2 = (page: number) => {
        setPage2(page);
        console.log(page);
    };


    const date = userCreate.split("T");
    const newDate = date[0];

    return (
        
        <section className={my.section}>
            <div className={my.title}>프로필</div>
            <div className={my.user}>
                <div className={my.userMain}>
                    <div className={my.userImg}>{userImg}</div>
                    <div className={my.userInfor}>
                        <div>{userNick}</div>
                        <div>{newDate}</div>
                        <div>{userEmail}</div>
                    </div>
                </div>
                <div className={my.userPatch}>
                    <div className={my.userPatchBtn} onClick={() => setModalOn(true)}>회원정보수정</div>
                </div>
            </div>
            <div className={my.title}>작성한 글</div>
            <div className={my.myWriting}>
                {!myBoards.length && <div>작성된 글이 없습니다.</div>}
                {myBoards.map((myBoard: any) => {
                    const date = myBoard.create_date.split("T");
                    const newDate = date[0];
                    return (
                        <Link href={`/board/${myBoard.comment}`} key={myBoard.id} className={my.myContentBox}>
                            <div className={my.myContentSelect}>{myBoard.title}</div>
                            <div className={my.myContentInfor}>
                                    <div className={my.myContentTitle}>{newDate}</div>
                                    <div>|</div>
                                    <div className={my.myContentDate}>{myBoard.category}</div>
                                </div>
                        </Link>)
                })}
            </div>
            <div className={my.myWritingSelect}>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={30}
                    totalItemsCount={1000}
                    pageRangeDisplayed={5}
                    prevPageText={"이전"}
                    nextPageText={"다음"}
                    onChange={handlePageChange}
                />
            </div>
            <div className={my.title}>작성한 댓글</div>
            <div className={my.myWriting}>
                {!comments.length && <div>작성된 글이 없습니다.</div>}
                {comments.map((comment: any) => {
                    const date = comment.create_date.split("T");
                    const newDate = date[0];
                    return (
                        <Link href={`/board/${comment.commentCount}`} key={comment.id} className={my.myCommentBox}>
                            <div className={my.myCommentSelect}>{comment.content}</div>
                            <div className={my.myCommentInfor}>
                                <div className={my.myCommentTitle}>{newDate}</div>
                                <div>|</div>
                                <div className={my.myCommentDate}>{comment.id}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className={my.myWritingSelect}>
                <Pagination
                    activePage={page2}
                    itemsCountPerPage={30}
                    totalItemsCount={1000}
                    pageRangeDisplayed={5}
                    prevPageText={"이전"}
                    nextPageText={"다음"}
                    onChange={handlePageChange2}
                />
            </div>
            {modalOn && <Modal modalOn={modalOn} setModalOn={setModalOn} userPw={userPw} setUserPw={setUserPw} userNick={userNick} />}
        </section>
    )
}
