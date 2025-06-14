'use client'

import board from "./board.module.css";
import "@/app/asset/css/pagination.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons"; //포토, 영상, 설문, 일반, 공지
import { DefaultContainer } from "@/shared/ui/DefaultContainer";
import { BoardManagementBox, BoardPaginationBox, BoardTable, BoardWrapper, BoardWriteButton } from "@/features/board";
import { boardType } from "@/features/board/types/table";

export default function Board() {
  const [boards, setBoards] = useState<boardType[]>([]);
  const [fixs, setFixs] = useState<boardType[]>([]);

  // type 변수 이름 변경 필요
  const [searchData, setSearchData] = useState<string>(""); //검색 input value
  const [type, setType] = useState<string>(""); //검색 select value

  const [page, setPage] = useState<number>(0); //페이지
  const [category, setCategory] = useState<string>("");
  const [totalCount, setTotalCount] = useState<number>(0);

  const tempData: boardType[] = [
    {
      id: 1,
      category: '일반',
      title: '제목 테스트',
      user_nick: '설윤아',
      content: '내용',
      view: 1,
      like: 2,
      date: new Date('2025-01-01'),
      user_id: {
        id: 1,
        profile: "닉네임",
      },
    }
  ]


  const getData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/board/list?page=${page}&category=${category}`);
      const data = await res.json();
      if (data.result) {
        setTotalCount(data.count);
        setBoards((prev) => [...prev, ...data.board]);
        setFixs((prev) => [...prev, ...data.fixBoard]);
      }
    } catch {
      setTotalCount(50);
      setBoards((prev) => [...prev, ...tempData]);
      setFixs((prev) => [...prev, ...tempData]);
    }
  }

  useEffect(() => {
    document.title = "자유게시판";
  }, []);

  useEffect(() => {
    if (page === 0) {
      setPage(1);
      return;
    }
    setFixs([]);
    setBoards([]);
    getData();
  }, [page])


  const handleSearchEnter = async () => {

  }
  return (
    <section>
      <DefaultContainer>
        <BoardWrapper>
          <BoardManagementBox title="자유게시판" url="/board/write" />
          <BoardTable fixs={fixs} boards={boards} />
        </BoardWrapper>
        <BoardPaginationBox />
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
      </DefaultContainer>
    </section>
  )
}
