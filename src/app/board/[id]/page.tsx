"use client"

import { useEffect, useState } from "react";
import bv from "../../css/boardView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


interface Datas {
    result:boolean,
    board: {
        category: string,
        content: string,
        create_date: string,
        fix: boolean,
        id: number,
        like: number,
        title: string,
        update_date: string,
        user_id: number,
        view: number
    },
    boardComment: {
        commentCount:number,
        comments: {

        }
    }
}

export default function BoardView(props: Params) {

    const [boards, setBoards] = useState<Datas['board'] | null>(null);
    const [boardsComment, setBoardsComment] = useState<Datas['boardComment'] | null>(null);
    const [review, setReview] = useState<string>("") //댓글input값
    const [like, setLike] = useState<boolean>(false); //좋아요
    const [likeNumber, setLikeNumber] = useState<number>(0); //게시물 좋아요 총합


    
    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/${props.params.id}`);
        const data = await res.json() as Datas;
        console.log(data,"hihihi")
        if(data.result) {
            setBoards(data.board);
            setBoardsComment(data.boardComment);
        }
    }

    useEffect(() => {
        getData();
    },[])
        
    

    const resister = async () => { //댓글등록
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/comment`);
        const data = await res.json();
        if(data.result) {
            setReview("");
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
        <section className={bv.section}>
            <div className={bv.mainBox}>
                <div className={bv.header}>
                    <div className={bv.headerTitle}>
                        <div>{boards?.category}</div>
                        <div>{boards?.title}</div>
                    </div>
                    <div className={bv.headerInforWrapper}>
                        <div className={bv.headerInfor1}>
                            <div>마틴</div>
                            <div>|</div>
                            <div>{boards?.create_date}</div>
                        </div>
                        <div className={bv.headerInfor2}>
                            <div>조회 {boards?.view}</div>
                            <div>|</div>
                            <div>추천 {boards?.like}</div>
                            <div>|</div>
                            <div>댓글 {boardsComment?.commentCount}</div>
                        </div>
                    </div>
                </div>
                <div className={bv.mainContent}>{boards?.content}</div>
                <div className={bv.likeBox}>
                    <div className={like ? bv.likeWrapper : bv.likeWrapper2} onClick={likes}>
                        <FontAwesomeIcon icon={faThumbsUp} className={bv.like}></FontAwesomeIcon>
                        <div className={bv.likeNumber}>{likeNumber}</div>
                    </div>
                </div>
                <div className={bv.reviewBox}>
                    <div>댓글등록</div>
                    <input className={bv.writeReview} placeholder="댓글" onChange={(e) => setReview(e.target.value)} />
                    <button className={bv.reviewBtn} onClick={resister}>등록</button>
                </div>
            </div>

            <div className={bv.reviewViewBox}>
                {/* map으로 쏴줄거임 */}
                <div className={bv.reviewData}>
                    <div className={bv.reviewId}>아이디</div>
                    <div className={bv.reviewContent}>댓글내용</div>
                </div>
                <div className={bv.reviewData}>
                    <div className={bv.reviewId}>asd123</div>
                    <div className={bv.reviewContent}>엔믹스 진짜 노래 잘하는듯</div>
                </div>
            </div>
        </section>
    )
}
