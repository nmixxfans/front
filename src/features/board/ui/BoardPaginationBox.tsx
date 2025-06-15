'use client'

import "@/app/asset/css/pagination.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination"
import { useRecoilState } from "recoil";
import styled from "styled-components"
import { categoryState, pageState, searchState, searchTypeState } from "../model/boardState";
import { useRouter } from "next/navigation";
import { noticePageState, noticeSearchState, noticeSearchTypeState } from "../model/noticeState";

const Box = styled.div`
  display: flex;
  justify-content: center;
`

interface BoxProps {
  totalCount: number;
  title: string;
}

export function BoardPaginationBox({ totalCount, title }: BoxProps) {

  // 자유게시판
  const [page, setPage] = useRecoilState(pageState);
  const [category] = useRecoilState(categoryState);
  const [search] = useRecoilState(searchState);
  const [searchType] = useRecoilState(searchTypeState);

  // 공지사항
  const [noticePage, setNoticePage] = useRecoilState(noticePageState);
  const [noticeSearch] = useRecoilState(noticeSearchState);
  const [noticeSearchType] = useRecoilState(noticeSearchTypeState);

  const router = useRouter();

  useEffect(() => {
    if (title === '자유게시판') {
      router.push(`/board?page=${page}&category=${category}&search=${search}&type=${searchType}`);
    } else {
      router.push(`/notice?page=${noticePage}&search=${noticeSearch}&type=${noticeSearchType}`);
    }
  }, [page])

  const handlePageChange = (pageNumber: number) => {
    if (title === '자유게시판') {
      setPage(pageNumber);
    } else {
      setNoticePage(pageNumber);
    }
  };

  return (
    <Box>
      <Pagination
        activePage={page}
        itemsCountPerPage={30}
        totalItemsCount={totalCount}
        pageRangeDisplayed={10}
        prevPageText={"이전"}
        nextPageText={"다음"}
        onChange={handlePageChange}
      />
    </Box>
  )
}