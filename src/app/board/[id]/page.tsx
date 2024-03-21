"use client"

import { useEffect, useState } from "react";
import styles from "./boardView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { boardUtcToKorTime } from "@/app/asset/functions/utc-to-kor-board";


interface boardType {
  category: string,
  content: string,
  create_date: Date,
  fix: boolean,
  id: number,
  like: number,
  title: string,
  update_date: Date,
  user_id: number,
  view: number
}

interface profileType {
  cover_img:string,
  grade:string,
  nick:string,
}

// interface Datas {
//     result:boolean,
//     board: {
//         category: string,
//         content: string,
//         create_date: string,
//         fix: boolean,
//         id: number,
//         like: number,
//         title: string,
//         update_date: string,
//         user_id: number,
//         view: number
//     },
//     boardComment: {
//         commentCount:number,
//         comments: {

//         }
//     }
// }

export default function BoardView(props: Params) {

  const [boards, setBoards] = useState<boardType>();
  const [profile, setProfile] = useState<profileType>();

  const [boardsComment, setBoardsComment] = useState<any>([]);

  // 댓글 입력 state
  const [commentInput, setCommentInput] = useState<string>("")

  const [like, setLike] = useState<boolean>(false); //좋아요
  const [likeNumber, setLikeNumber] = useState<number>(0); //게시물 좋아요 총합

  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/${props.params.id}`);
    const data = await res.json();
    console.log(data)
    if (data.result) {
      setBoards(data.board);
      setProfile(data.profile);
      setBoardsComment(data.boardComment);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const resister = async () => { //댓글등록
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/comment`);
    const data = await res.json();
    if (data.result) {
      setCommentInput("");
    }

    if (data.result) {
      alert("댓글이 등록되었습니다.");
    } else {
      alert("댓글 등록이 안된듯? ㅋ");
      document.location.reload();
    }
  }

  const likes = async () => { //좋아요기능
    if (like) {
      alert("이미 좋아요를 누르셨습니다.");
    }
    setLike(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/`);
    const data = await res.json();
    if (data.result) {
      setLikeNumber(data.likeNumber);
      alert("좋아요를 누르셨습니다.");
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.mainBox}>
        <div className={styles.boardInformaionBox}>
          <div className={styles.informaionTitle}>
            <div>[{boards?.category}]</div>
            <div>{boards?.title}</div>
          </div>
          <div className={styles.headerInforWrapper}>
            <div className={styles.headerInfor1}>
              <div>{profile?.nick}</div>
              <div>|</div>
              <div>{boardUtcToKorTime(new Date(boards?.create_date ?? "2024-03-01"))}</div>
            </div>
            <div className={styles.headerInfor2}>
              <div>조회 {boards?.view}</div>
              <div>|</div>
              <div>좋아요 {boards?.like}</div>
              <div>|</div>
              <div>댓글 {boardsComment?.commentCount}</div>
            </div>
          </div>
        </div>
        <div className={styles.mainContent}>{boards?.content}</div>
        <div className={styles.likeBox}>
          <div className={like ? styles.likeWrapper : styles.likeWrapper2} onClick={likes}>
            <FontAwesomeIcon icon={faThumbsUp} className={styles.like}></FontAwesomeIcon>
            <div className={styles.likeNumber}>{likeNumber}</div>
          </div>
        </div>
        <div className={styles.reviewBox}>
          <div>댓글등록</div>
          <input className={styles.writeReview} placeholder="댓글" onChange={(e) => setCommentInput(e.target.value)} />
          <button className={styles.reviewBtn} onClick={resister}>등록</button>
        </div>
      </div>

      <div className={styles.reviewViewBox}>
        {/* map으로 쏴줄거임 */}
        <div className={styles.reviewData}>
          <div className={styles.reviewId}>아이디</div>
          <div className={styles.reviewContent}>댓글내용</div>
        </div>
        <div className={styles.reviewData}>
          <div className={styles.reviewId}>asd123</div>
          <div className={styles.reviewContent}>엔믹스 진짜 노래 잘하는듯</div>
        </div>
      </div>
    </section>
  )
}
