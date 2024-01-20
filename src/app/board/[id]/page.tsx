"use client"

import { useEffect, useState } from "react";
import bv from "../../css/boardView.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";


export default function BoardView(props: Params) {

    const [data, setData] = useState<[]>([])
    const [review, setReview] = useState<string>("") //댓글input값
    const [like, setLike] = useState<string>(""); //좋아요
    const [likeNumber, setLikeNumber] = useState<number>(0); //게시물 좋아요 총합


    useEffect(() => {
        const data = async () => {
            const res = await axios({
                url: `/api/board/:${props.params.id}`,
                method: "GET"
            })
            setData(res.data);
        }
        data();
    })

    const resister = async () => { //댓글등록
        const res = await axios({
            method: "POST",
            data: {
                // id:data.id,
                review: review, //리뷰
            }
        })
        setReview("");
        if (res.data.result) {
            alert("댓글이 등록되었습니다.");
        } else {
            alert("댓글 등록이 안된듯? ㅋ");
            document.location.reload();
        }
    }

    const likes = async () => { //좋아요기능
        if (like === "m") {
            alert("이미 좋아요를 누르셨습니다.");
        }
        setLike("m")
        const res = await axios({
            method: "POST",
            data: {
                // id:data.id,
                like: like
            }
        })
        if (res.data.result) {
            setLikeNumber(res.data.likeNumber);
            alert("좋아요를 누르셨습니다.")
        }
    }

    return (
        <section className={bv.section}>
            <div className={bv.mainBox}>
                <div className={bv.header}>
                    <div className={bv.headerTitle}>
                        <div>[일반]</div>
                        <div>엔믹스 앨범 수록곡이 몇 곡인가요?</div>
                    </div>
                    <div className={bv.headerInforWrapper}>
                        <div className={bv.headerInfor1}>
                            <div>마틴</div>
                            <div>|</div>
                            <div>2024.01.20</div>
                        </div>
                        <div className={bv.headerInfor2}>
                            <div>조회 30</div>
                            <div>|</div>
                            <div>추천 25</div>
                            <div>|</div>
                            <div>댓글 5</div>
                        </div>
                    </div>
                </div>
                <div className={bv.mainContent}>내용</div>
                <div className={bv.likeBox}>
                    <div className={like === "m" ? bv.likeWrapper : bv.likeWrapper2} onClick={likes}>
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
