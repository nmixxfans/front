'use client'

import Link from "next/link";
import board from '../css/board.module.css';
import { useEffect } from "react";

export default function Board() {

    
    useEffect(()=>{
        document.title = "자유게시판";
    }, [])

    return (
        <section className={board.section}>
            <div className={board.container}>
                <div className={board.headBox}>
                    자유게시판
                </div>
                <div className={board.listBox}>
                    목록
                </div>
                <div className={board.btnBox}>
                    <Link href={'/board/write'}>글쓰기</Link>
                </div>
                <div className={board.searchBox}>
                    검색
                </div>
            </div>
        </section>
    )
}
