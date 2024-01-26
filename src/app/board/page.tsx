'use client'

import Link from "next/link";
import board from '../css/board.module.css';
import "../css/pagination.css";
import { KeyboardEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCamera } from "@fortawesome/free-solid-svg-icons"; //포토
import { faVideo } from "@fortawesome/free-solid-svg-icons"; //영상
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"; //설문
import { faFlag } from "@fortawesome/free-solid-svg-icons"; //공지
import { faClipboard } from "@fortawesome/free-solid-svg-icons"; //일반
import Pagination from "react-js-pagination";
import axios from "axios";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { korTime } from "../functions/utc-to-kor";

export default function Board() {

  interface userDataType{
    id:number,
    profile:string;
  }
  interface boardDataType {
    id: number,
    category: string,
    title: string,
    user_nick: string,
    content: string,
    view: number,
    like: number,
    create_date:Date,
    user_id:userDataType
  }

  const [boards, setBoards] = useState<boardDataType[]>([]);
  const [fixs, setFixs] = useState<boardDataType[]>([]);

  // type 변수 이름 변경 필요
  const [searchData, setSearchData] = useState<string>(""); //검색 input value
  const [type, setType] = useState<string>(""); //검색 select value
  
  const [page, setPage] = useState<number>(0); //페이지
  const [category, setCategory] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);


  const getData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/list?page=${page}&category=${category}`);
    const data = await res.json();
    if(data.result){
      setTotalCount(data.count);
      setBoards((prev)=>[...prev, ...data.board]);
      setFixs((prev)=>[...prev, ...data.fixBoard]);
    }
  }

  useEffect(() => {
    document.title = "자유게시판";
  }, []);

  useEffect(()=>{
    if(page===0){
      setPage(1);
      return;
    }
    setBoards([]);
    getData();
  }, [page])

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const handleCategoryClick = (name:string)=>{
    setCategory(name);
    setPage(0);
  }

  const handleSearchEnter = async () => {
    
  }

  interface categoryType {
    id:string,
    name:string,
  }

  const categoryList:categoryType[] = [
    {
      id:"recommand",
      name:"추천"
    },
    {
      id:"normal",
      name:"일반"
    },
    {
      id:"notice",
      name:"공지"
    },
    {
      id:"official",
      name:"공식"
    },
    {
      id:"sns",
      name:"SNS"
    },
    {
      id:"infor",
      name:"정보"
    },
    {
      id:"photo",
      name:"사진"
    },
    {
      id:"video",
      name:"영상"
    },
    {
      id:"review",
      name:"후기"
    },
    {
      id:"verify",
      name:"인증"
    },
    {
      id:"analyze",
      name:"분석"
    }
  ]

  return (
    <section className={board.section}>
      <div className={board.container}>
        <div className={board.headBox}>
          <div className={board.headWrapper}>
            <div className={board.title}>
              자유게시판
            </div>
            <div className={board.horseHeadBox}>
              <input type="radio" id="all" name="category" defaultChecked hidden />
              <label htmlFor="all" className={board.listBox} onClick={() => handleCategoryClick("")}>전체</label>
              {categoryList.map((value, index)=>{
                return (
                  <div key={index}>
                    <input type="radio" id={value.id} name="category" hidden />
                    <label htmlFor={value.id} className={board.listBox} onClick={() => handleCategoryClick(value.name)}>{value.name}</label>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
            <Link href={'/board/write'} className={board.link}>글쓰기</Link>
          </div>
        </div>
        <div className={board.mainBox}>
          <div className={board.headerData1}>번호</div>
          <div className={board.headerData2}>말머리</div>
          <div className={board.headerEmoji}></div>
          <div className={board.headerData3}>제목</div>
          <div className={board.headerData4}>작성자</div>
          <div className={board.headerData5}>작성일</div>
          <div className={board.headerData6}>조회수</div>
          <div className={board.headerData7}>추천</div>
        </div>
        {boards.map((value, index) => {
          return (
            <div key={index} className={board.mainBox}>
              <div className={board.data1}>{value.id}</div>
              <div className={board.data2}>{value.category}</div>
              <div className={board.emoji}></div>
              <div className={board.contentBox}>
                <Link href={`/board/${value.id}`} className={board.content}>{value.title.length > 16 ? value.title.substring(0, 16) + "..." : value.title}</Link>
              </div>
              <div className={board.data4}>{value.user_id.profile.length > 8 ? value.user_id.profile.substring(0, 8) + "..." : value.user_id.profile }</div>
              <div className={board.data5}>{korTime(new Date(value.create_date))}</div>
              <div className={board.data6}>{value.view}</div>
              <div className={board.data7}>{value.like}</div>
            </div>
          )
        })}
        <div className={board.writeBtnBox}>
          <Link href={'/board/write'} className={board.link}>글쓰기</Link>
        </div>
        <div className={board.pageBox}>
          <Pagination
            activePage={page}
            itemsCountPerPage={30}
            totalItemsCount={totalCount}
            pageRangeDisplayed={10}
            prevPageText={"이전"}
            nextPageText={"다음"}
            onChange={handlePageChange}
          />
        </div>
        <div className={board.searchBox}>
          <select className={board.searchSelect} onChange={(e) => setType(e.target.value)} >
            <option value={"content"}>내용</option>
            <option value={"titleAndContent"}>제목+내용</option>
            <option value={"writer"}>작성자</option>
          </select>
          <input type="text"
            className={board.searchInput}
            onChange={(e) => setSearchData(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") { handleSearchEnter() } }}
          />
          <div className={board.searchBtn}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </section>
  )
}
