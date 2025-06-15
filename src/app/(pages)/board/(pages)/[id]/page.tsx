"use client"

import { useEffect, useState } from "react";
import styles from "./boardView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { boardUtcToKorTime } from "@/app/asset/functions/utc-to-kor-board";
import { useRecoilValue } from "recoil";
import { accessTokenState, userState } from "@/shared/lib/Atom";


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
  cover_img: string,
  grade: string,
  nick: string,
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

  const [boardCount, setBoardCount] = useState<number>(0);
  const [boardComment, setBoardComment] = useState<any>([]);

  // access_token 가져오기
  const access_token = useRecoilValue(accessTokenState);

  // 로그인 정보 가져오기
  const user = useRecoilValue(userState);

  // 댓글 입력 state
  const [commentInput, setCommentInput] = useState<string>("")

  const [like, setLike] = useState<boolean>(false); //좋아요
  const [likeCount, setLikeCount] = useState<number>(0); //게시물 좋아요 총합

  // 데이터 가져오기
  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/${props.params.id}`);
    const data = await res.json();
    console.log(data)
    if (data.result) {
      setBoards(data.board);
      setProfile(data.profile);
      setBoardCount(data.boardComment.commentCount);
      setBoardComment(data.boardComment.comments);
      setLikeCount(data.board.like);
    }
  }

  // 조회수 업데이트
  const updateView = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/view`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: props.params.id })
    });
    const data = await res.json();

    if (data.result) {
      console.log("조회수 업데이트")
    }
  }

  // 좋아요 확인
  const checkLike = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/like?id=${props.params.id}&access_token=${access_token}`);
    const data = await res.json();
    console.log(data)
    if (data.result) {
      if (data.liked) {
        setLike(true);
      } else {
        setLike(false);
      }
    }
  }

  useEffect(() => {
    // 로그인하지 않은 유저
    if (access_token.length === 0) {
      return;
    }
    checkLike();
  }, [access_token])

  useEffect(() => {
    getData();
    updateView();
  }, [])

  // 댓글 등록
  const handleCommentAdd = async () => {

    if(commentInput.length < 1){
      alert("댓글을 입력해주세요")
      return;
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/comment`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        board_id: props.params.id,
        user_id: user.id,
        content:commentInput,
      })
    });

    const data = await res.json();

    if (data.result) {
      // 왜 변경 안되는지 확인해봐야함
      setCommentInput("")
      setBoardComment(data.comment)
    }
  }

// 좋아요
const handleLikeClick = async () => {

  if (access_token.length === 0) {
    alert("로그인 후 이용해 주세요.");
    return;
  }

  if (like) {
    alert("좋아요는 한번만 누를 수 있습니다.");
    return;
  }


  const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/like`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: props.params.id, access_token: access_token })
  });
  const data = await res.json();
  if (data.result) {
    setLike(true);
    setLikeCount(likeCount + 1);
  } else {
    alert("[오류] " + data.messege);
  }
}

return (
  <section className={styles.section}>
    <div className={styles.container}>
      <div className={styles.mainBox}>
        <div className={styles.boardInformaionBox}>
          <div className={styles.informaionTitleBox}>
            <div className={styles.informationCategory}>[{boards?.category}]</div>
            <div className={styles.informationTitle}>{boards?.title}</div>
          </div>
          <div className={styles.boardInformaionBox2}>
            <div className={styles.informationDataBox}>
              <div className={styles.informationNick}>{profile?.nick}</div>
              <div className={styles.informationBar}>|</div>
              <div className={styles.informationCreateDate}>{boardUtcToKorTime(new Date(boards?.create_date ?? "2024-03-01"))}</div>
            </div>
            <div className={styles.informationDataBox}>
              <div className={styles.informationView}>조회 {boards?.view}</div>
              <div className={styles.informationBar}>|</div>
              <div className={styles.informationLike}>좋아요 {boards?.like}</div>
              <div className={styles.informationBar}>|</div>
              <div className={styles.informationCommentCount}>댓글 {boardComment?.commentCount}</div>
            </div>
          </div>
        </div>
        <div className={styles.contentBox}>{boards?.content}</div>
        <div className={styles.likeBox}>
          <div className={styles.likeBoxWrapper}>
            <div className={like ? styles.likeWrapper : styles.likeWrapper2} onClick={handleLikeClick}>
              <FontAwesomeIcon icon={faHeart} className={styles.like} />
            </div>
            <div className={styles.likeCount}>{likeCount}</div>
          </div>
        </div>
      </div>
      <div className={styles.commentListBox}>
        {
          boardComment.map((item: any, index:number) => {
            return (
              <div className={styles.commentItemBox} key={index}>
                <div className={styles.commentProfileBox}>
                  <div className={styles.commentImgBox}>
                    <img src="https://cdn.gukjenews.com/news/photo/202202/2411105_2404052_4854.jpg" alt="프로필 사진" className={styles.commentProfileImg}></img>
                  </div>
                  <div className={styles.commentNick}>{item.user_id.profile.nick}</div>
                </div>
                <div className={styles.commentContenBox}>
                  {item.content}
                </div>
                <div className={styles.replyListBox}>
                  {item.board_id.boardReply.map((reply: any) => {
                    return (
                      <div className={styles.replyItemBox}>
                        ㄴ답글
                      </div>
                    )
                  })}

                </div>
              </div>
            )
          })
        }
      </div>


      <div className={styles.commentBox}>
        <textarea className={styles.commentInput} placeholder="댓글" onChange={(e) => setCommentInput(e.target.value)} />
        <button className={styles.commentAddBtn} onClick={handleCommentAdd}>등록</button>
      </div>
    </div>
  </section>
)
}
