"use client"

import my from "./mypage.module.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "../asset/css/pagination.css";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../Atom";
import { KeyboardEvent } from 'react';
import UserModal from "./element/UserModal";

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
      {modalOn && <UserModal modalOn={modalOn} setModalOn={setModalOn} userPw={userPw} setUserPw={setUserPw} userNick={userNick} />}
    </section>
  )
}
