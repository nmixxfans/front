"use client"

import styles from "./mypage.module.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "../asset/css/pagination.css";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRecoilValue } from "recoil";
import { accessTokenState, userState } from "../shared/Atom";
import UserModal from "./element/UserModal";
import { myUtcToKorTime } from "../asset/functions/utc-to-kor-mypage";

// interface Board {
//   board: string,
//   boardCount: number
// }

// interface Comment {
//   comment: string,
//   commentCount: number
// }

// interface Datas {
//   boards: { board: Board[], boardCount: number },
//   comments: { comment: Comment[], commentCount: number },
//   result: boolean,
//   user: {
//     block: boolean;
//     email: string;
//     id: number;
//     profile: {
//       cover_img: string;
//       create_date: string;
//       grade: string;
//       nick: string;
//     }[]
//     userId: string;
//   }
// }


export default function Mypage(props: Params) {

  const [userEmail, setUserEmail] = useState<string>("");
  const [userCreateDate, setUserCreateDate] = useState<string>("");
  const [userImg, setUserImg] = useState<any>("");
  const [comments, setComments] = useState<any[]>([]);
  const [boards, setBoards] = useState<any[]>([]);
  const [userPassword, setUserPassword] = useState<string>("");
  const [userNick, setUserNick] = useState<string>("");

  const [postCount, setPostCount] = useState<number>(0);
  const [commentCount, setCommentCount] = useState<number>(0);

  const [postPageCount, setPostPageCount] = useState<number>(1);
  const [commentPageCount, setCommentPageCount] = useState<number>(1);
  const [modalOn, setModalOn] = useState<boolean>(false);

  const accessToken = useRecoilValue<string>(accessTokenState);
  const sign = useRecoilValue(userState);

  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage?access_token=${accessToken}`);
    const data = await res.json();
    if (data.result) {
      setUserNick(data.user.profile[0].nick);
      setUserImg(data.user.profile[0].cover_img);
      setUserCreateDate(data.user.profile[0].create_date);
      setUserEmail(data.user.email);
    }
  }

  useEffect(() => {
    getData();
  }, [accessToken]);

  const getPost = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage/content?id=${sign.id}&page=${postPageCount}`);
    const data = await res.json();
    if (data.result) {
      setPostCount(data.boardCount);
      setBoards(data.board);
    }
  }

  const getComment = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/auth/mypage/comment?id=${sign.id}&page=${commentPageCount}`);
    const data = await res.json();
    if (data.result) {
      setCommentCount(data.commentCount);
      setComments(data.comment);
    }
  }

  useEffect(()=>{
    if(sign.id !== 0){
      getPost();
      getComment();
    }
  }, [sign]);

  useEffect(()=>{
    if(postCount !== 0){
      getPost();
    }
  }, [postPageCount])

  useEffect(()=>{
    if(commentCount !== 0){
      getComment();
    }
  }, [commentPageCount])


  const handlePostPageChange = (page: number) => {
    setPostPageCount(page);
  };
  const handleCommentPageChange = (page: number) => {
    setCommentPageCount(page);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <div className={styles.title}>내 정보</div>
        </div>

        <div className={styles.userInformationBox}>
          <div className={styles.userInformation}>
            <div className={styles.userImgBox}>
              <img className={styles.userImg} src={userImg} alt="프로필 사진" />
            </div>
            <div className={styles.userDataBox}>
              <div className={styles.userOutputBox}>
                <div className={styles.userNickname}>{userNick}</div>
                <div className={styles.userEmail} title="이메일">{userEmail}</div>
                <div className={styles.userCreateDate} title="가입일">{myUtcToKorTime(new Date(userCreateDate))}</div>
              </div>
              <div className={styles.userUpdateBox}>
                <div className={styles.userUpdate} onClick={() => setModalOn(true)}>회원정보 수정</div>
              </div>
            </div>
          </div>
        </div>

        {/* 내가 작성한 글 */}
        <div className={styles.sectionBox}>
          <div className={styles.titleBox}>
            <div className={styles.title}>내가 작성한 글</div>
          </div>
          <div className={styles.myPostBox}>
            {!boards.length && <div className={styles.noneData}>작성된 글이 없습니다.</div>}
            {boards.map((value: any, index: number) => {
              return (
                <Link href={`/board/${value.id}`} key={index} className={styles.myContentBox}>
                  <div className={styles.myContentTitle}>{value.title}</div>
                  <div className={styles.myContentInformation}>
                    <div className={styles.myContentDate}>{myUtcToKorTime(new Date(value.create_date))}</div>
                    <div className={styles.myContentDivide}>|</div>
                    <div className={styles.myContentCategory}>{value.category}</div>
                  </div>
                </Link>)
            })}
          </div>
          <div className={styles.paginationBox}>
            <Pagination
              activePage={postPageCount}
              itemsCountPerPage={5}
              totalItemsCount={postCount}
              pageRangeDisplayed={5}
              prevPageText={"이전"}
              nextPageText={"다음"}
              onChange={handlePostPageChange}
            />
          </div>
        </div>

        {/* 내가 작성한 댓글 */}
        <div className={styles.sectionBox}>
          <div className={styles.titleBox}>
            <div className={styles.title}>내가 작성한 댓글</div>
          </div>
          <div className={styles.myPostBox}>
            {!comments.length && <div className={styles.noneData}>작성된 글이 없습니다.</div>}
            {comments.map((value: any, index:number) => {
              return (
                <Link href={`/board/${value.id}`} key={index} className={styles.myContentBox}>
                  <div className={styles.myContentTitle}>{value.content}</div>
                  <div className={styles.myContentInformation}>
                    <div className={styles.myContentDate}>{myUtcToKorTime(new Date(value.create_date))}</div>
                    {/* <div>|</div> */}
                    {/* <div className={styles.myContentName}>{value.id}</div> */}
                  </div>
                </Link>
              )
            })}
          </div>
          <div className={styles.paginationBox}>
            <Pagination
              activePage={commentPageCount}
              itemsCountPerPage={5}
              totalItemsCount={commentCount}
              pageRangeDisplayed={5}
              prevPageText={"이전"}
              nextPageText={"다음"}
              onChange={handleCommentPageChange}
            />
          </div>
          
        </div>
      </div>
      {/* 회원정보 수정 모달창 */}
      {modalOn && <UserModal setModalOn={setModalOn} setUserPassword={setUserPassword} />}
    </section>
  )
}
