'use client'

import Link from "next/link";
import board from '../css/board.module.css';
import { useEffect, useState } from "react";

export default function Board() {
    // const [datas, setDatas] = useState<[]>([]);
    const [category, setCategory] = useState<boolean>(true);
    const [selectData, setSelectData] = useState<any>("");
    const datas = [
        {
            number: 4,
            select: "공지",
            title: "엔믹스 최고야 이야이야이야요",
            writer: "박지성",
            date: "23.12.12",
            view: 532,
            like: 57
        },
        {
            number: 3,
            select: "일반",
            title: "엔믹스 최고야 라라라라라ㅏ라라라",
            writer: "손흥민",
            date: "23.12.14",
            view: 777,
            like: 357
        },
        {
            number: 2,
            select: "일반",
            title: "나랏말씀이 듕귁에 닿아 문자와 서로 사맣디 아니할세",
            writer: "마틴",
            date: "23.12.16",
            view: 999,
            like: 558
        },
        {
            number: 1,
            select: "설문",
            title: "엔믹스가 왜 성공하지 못하는지",
            writer: "이원노",
            date: "23.12.17",
            view: 421,
            like: 280
        },
    ];
    useEffect(() => {

    }, [selectData])//데이터요청

    useEffect(() => {
        document.title = "자유게시판";
    }, [])

    return (
        <section className={board.section}>
            <div className={board.container}>
                <div className={board.headBox}>
                    <div className={board.headWrapper}>
                        <div className={board.title}>
                            자유게시판
                        </div>
                        <input type="radio" id="standard" name="category" defaultChecked hidden/>
                        <label htmlFor="standard" className={board.listBox} onClick={() => setSelectData("일반")}>일반</label>
                        <input type="radio" id="notice" name="category" hidden/>
                        <label htmlFor="notice" className={board.listBox} onClick={() => setSelectData("공지")}>공지</label>
                        <input type="radio" id="photo" name="category" hidden/>
                        <label htmlFor="photo" className={board.listBox} onClick={() => setSelectData("포토")}>포토</label>
                        <input type="radio" id="video" name="category" hidden/>
                        <label htmlFor="video" className={board.listBox} onClick={() => setSelectData("영상")}>영상</label>
                        <input type="radio" id="que" name="category" hidden/>
                        <label htmlFor="que" className={board.listBox} onClick={() => setSelectData("설문")}>설문</label>
                    </div>
                    <div className={board.btnBox}>
                        <Link href={'/board/write'} className={board.link}>글쓰기</Link>
                    </div>
                </div>
                <div className={board.mainBox}>
                    <div className={board.headerData1}>번호</div>
                    <div className={board.headerData2}>말머리</div>
                    <div className={board.headerData3}>제목</div>
                    <div className={board.headerData4}>작성자</div>
                    <div className={board.headerData5}>작성일</div>
                    <div className={board.headerData6}>조회수</div>
                    <div className={board.headerData7}>추천</div>
                </div>
                {datas.map((data) => {
                    return (
                        <div key={data.number} className={board.mainBox}>
                            <div className={board.data1}>{data.number}</div>
                            <div className={board.data2}>{data.select}</div>
                            <div className={board.data3}>{data.title}</div>
                            <div className={board.data4}>{data.writer}</div>
                            <div className={board.data5}>{data.date}</div>
                            <div className={board.data6}>{data.view}</div>
                            <div className={board.data7}>{data.like}</div>
                        </div>
                    )
                })}



                <div className={board.searchBox}>
                    검색
                </div>
            </div>
        </section>
    )
}
