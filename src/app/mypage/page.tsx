"use client"

import my from "../css/mypage.module.css";
import { useEffect, useState, Dispatch, SetStateAction } from "react";
import Pagination from "react-js-pagination";
import "../css/pagination.css";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function Modal({ modalOn, setModalOn, userPw, setUserPw, userNick }: { modalOn: boolean, setModalOn: Dispatch<SetStateAction<boolean>>, userPw: string, setUserPw: Dispatch<SetStateAction<string>>, userNick: string }) {

    const [pw, setPw] = useState<string>("");
    const [pw2, setPw2] = useState<string>("");
    const [nick, setNick] = useState<string>("");
    const [confirmPw, setConfirmPw] = useState<boolean>(false);

    const nickCheck = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/nick`);
            const data = await res.json();
            if(data.result) {
                setNick(data.nick);
            }
    };

    const confirm = async () => {
        let pwPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        if(!pwPattern.test(pw) && !pwPattern.test(pw2)){
            alert("비밀번호  형식에 맞지 않습니다.");
        } else {
            setConfirmPw(true);
        }
        if(pw === pw2) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/mypage`);
            const data = await res.json();
            if (data.result) {
                setUserPw(data.pw);
                alert("비밀번호가 변경되었습니다.");
                window.location.href = `${process.env.NEXT_PUBLIC_BACK_URL}/mypage`;
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
                    <input placeholder="pw" onChange={e => setPw(e.target.value)} />
                    {confirmPw ? <div>비밀번호가 일치합니다.</div> : <div>비밀번호가 불일치합니다.</div>}
                    <div>비밀번호확인</div>
                    <input placeholder="pw" onChange={e => setPw2(e.target.value)} />
                    <div className={my.modalBtn}>
                        <div onClick={confirm}>완료</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default function Mypage(props: Params) {

    interface datas {
        id: number,
        select: string,
        title: string,
        date: string,
    }

    const datas: datas[] = [
        {
            id: 1,
            select: "공지",
            title: "[필독] 공지사항",
            date: "24.01.09",
        },
        {
            id: 2,
            select: "포토",
            title: "엔믹스 무대사진 모음",
            date: "24.01.05",
        },
        {
            id: 3,
            select: "영상",
            title: "엔믹스 신곡 무비",
            date: "23.12.28",
        },
    ];

    interface comment {
        id: number,
        userid: string,
        date: string,
        comment: string
    }

    const comment: comment[] = [
        {
            id: 1,
            userid: "ronaldo",
            date: "24.01.18",
            comment: "설윤 짱!"
        },
        {
            id: 2,
            userid: "ronaldo",
            date: "24.01.17",
            comment: "해원 짱!"
        }
    ]


    const [comments, setComments] = useState<comment[]>([]);
    const [myContents, setMyContents] = useState<datas[]>([]);
    const [userPw, setUserPw] = useState<string>("");
    const [userNick, setUserNICK] = useState<string>("");
    const [page, setPage] = useState<number>(1); //페이지
    const [page2, setPage2] = useState<number>(1); //페이지
    const [modalOn, setModalOn] = useState<boolean>(false);

    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/mypage`);
        const data = await res.json();
        if (data.result) {
            setMyContents(data.content);
            setComments(data.comment);
            setUserPw(data.pw);
            setUserNICK(data.nick);
        }
    }

    useEffect(() => {
        setMyContents(datas);
        setComments(comment);
        getData()
    }, []);


    const handlePageChange = (page: number) => {
        setPage(page);
        console.log(page);
    };
    const handlePageChange2 = (page: number) => {
        setPage2(page);
        console.log(page);
    };




    return (
        <section className={my.section}>
            <div className={my.title}>프로필</div>
            <div className={my.user}>
                <div className={my.userMain}>
                    <div className={my.userImg}>사진</div>
                    <div className={my.userInfor}>
                        <div>닉네임 : nmixx456</div>
                        <div>가입일 : 2024.03.02</div>
                        <div>이메일 : qwer@naver.com</div>
                    </div>
                </div>
                <div className={my.userPatch}>
                    <div className={my.userPatchBtn} onClick={() => setModalOn(true)}>회원정보수정</div>
                </div>
            </div>
            <div className={my.title}>작성한 글</div>
            <div className={my.myWriting}>
                {myContents.map((myContent) => {
                    return (
                        <Link href={`/board/${myContent.id}`} key={myContent.id} className={my.myContentBox}>
                            <div className={my.myContentSelect}>{myContent.title}</div>
                            <div className={my.myContentInfor}>
                                <div className={my.myContentTitle}>{myContent.date}</div>
                                <div>|</div>
                                <div className={my.myContentDate}>{myContent.select}</div>
                            </div>
                        </Link>
                    )
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
                {comments.map((comment) => {
                    return (
                        <Link href={`/board/${comment.id}`} key={comment.id} className={my.myCommentBox}>
                            <div className={my.myCommentSelect}>{comment.comment}</div>
                            <div className={my.myCommentInfor}>
                                <div className={my.myCommentTitle}>{comment.date}</div>
                                <div>|</div>
                                <div className={my.myCommentDate}>{comment.userid}</div>
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
