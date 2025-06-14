'use client'

import pr from "./profile.module.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "../../css/pagination.css";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export default function Profile(props: Params) {

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
    const [comments, setComments] = useState<comment[]>([]);// 임시댓글data 
    const [myContents, setMyContents] = useState<datas[]>([]); //임시data
    const [page, setPage] = useState<number>(1); //페이지
    const [page2, setPage2] = useState<number>(1); //페이지

    const getData = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/profile/info/:${props.params.id}`);
        const data = await res.json();
        if(data.result) {
            setMyContents(datas);
            setComments(comment);
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
        <section className={pr.section}>
            <div className={pr.title}>프로필</div>
            <div className={pr.user}>
                <div className={pr.userImg}>사진</div>
                <div>닉네임</div>
                <div>가입일</div>
            </div>
            <div className={pr.title}>작성한 글</div>
            <div className={pr.myWriting}>
                {myContents.map((myContent) => {
                    return (
                        <Link href={`/board/${myContent.id}`} key={myContent.id} className={pr.myContentBox}>
                            <div className={pr.myContentSelect}>{myContent.title}</div>
                            <div className={pr.myContentInfor}>
                                <div className={pr.myContentTitle}>{myContent.date}</div>
                                <div>|</div>
                                <div className={pr.myContentDate}>{myContent.select}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className={pr.myWritingSelect}>
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
            <div className={pr.title}>작성한 댓글</div>
            <div className={pr.myWriting}>
                {comments.map((comment) => {
                    return (
                        <Link href={`/board/${comment.id}`} key={comment.id} className={pr.myCommentBox}>
                            <div className={pr.myCommentSelect}>{comment.comment}</div>
                            <div className={pr.myCommentInfor}>
                                <div className={pr.myCommentTitle}>{comment.date}</div>
                                <div>|</div>
                                <div className={pr.myCommentDate}>{comment.userid}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className={pr.myWritingSelect}>
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
        </section>
    )
}
