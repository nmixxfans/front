'use client'

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import { categoryState, pageState, searchState, searchTypeState } from "../model/boardState"
import { noticePageState, noticeSearchState, noticeSearchTypeState } from "../model/noticeState"
import { useRouter } from "next/navigation"

const Box = styled.div`
  display: flex;
  gap: 5px;
  height: 25px;
  width: 100%;
`

const BoardSearchSelect = styled.select`
  outline: none;
  border: 1px solid #dadada;
  border-radius: 3px;
`

const BoardSearchInput = styled.input`
  width: 150px; 
  padding: 5px;
  outline: none;
  border: 1px solid #dadada;
  border-radius: 3px;
`

const BoardSearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #000;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  height: 100%;
  font-size: 12px;
  border-radius: 3px;
`

interface BoxProps {
  title: string;
}

export function BoardSearchBox({ title }: BoxProps) {

  // 자유게시판
  const [search, setSearch] = useRecoilState(searchState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);
  const [page, setPage] = useRecoilState(pageState);
  const [category] = useRecoilState(categoryState);

  // 공지사항
  const [noticeSearch, setNoticeSearch] = useRecoilState(noticeSearchState);
  const [noticeSearchType, setNoticeSearchType] = useRecoilState(noticeSearchTypeState);
  const [noticePage, setNoticePage] = useRecoilState(noticePageState);

  const router = useRouter();

  const handleSearch = () => {
    // 검색 시 page 초기화하므로 recoil은 초기화만 시킴
    if (title === '자유게시판') {
      setPage(1);
      router.push(`/board?page=1&category=${category}&search=${search}&type=${searchType}`)
    } else {
      setNoticePage(1);
      router.push(`/notice?page=1&search=${noticeSearch}&type=${noticeSearchType}`);
    }
  }

  const handleInputSearch = (value: string) => {
    if (title === '자유게시판') {
      setSearch(value);
    } else {
      setNoticeSearch(value);
    }
  }

  const handleChangeType = (value: string) => {
    if (title === '자유게시판') {
      setSearchType(value);
    } else {
      setNoticeSearchType(value);
    }
  }

  return (
    <Box>
      <BoardSearchSelect onChange={(e) => handleChangeType(e.target.value)} >
        <option value={"title"}>제목</option>
        <option value={"content"}>내용</option>
        <option value={"all"}>제목+내용</option>
        <option value={"writer"}>작성자</option>
      </BoardSearchSelect>
      <BoardSearchInput type="text"
        onChange={(e) => handleInputSearch(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { handleSearch() } }}
      />
      <BoardSearchButton onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </BoardSearchButton>
    </Box>
  )
}