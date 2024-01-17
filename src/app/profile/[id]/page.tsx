'use client'

import pr from "../../css/profile.module.css";
import axios from "axios";
import { useState } from "react";
import Pagination from "react-js-pagination";
import "../../css/pagination.css";


export default function Profile() {

    const [page, setPage] = useState<number>(1); //페이지

    const handlePageChange = (page: number) => {
        setPage(page);
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
            <div className={pr.title}>내 댓글</div>
            <div className={pr.myWriting}>
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
        </section>
    )
}
