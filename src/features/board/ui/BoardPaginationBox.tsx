'use client'

import "@/app/asset/css/pagination.css";
import { useEffect, useState } from "react";
import Pagination from "react-js-pagination"
import { useRecoilState } from "recoil";
import styled from "styled-components"
import { categoryState, pageState } from "../model/boardState";
import { useRouter } from "next/navigation";

const Box = styled.div`
  display: flex;
  justify-content: center;
`

interface BoxProps {
  totalCount: number;
}

export function BoardPaginationBox({ totalCount }: BoxProps) {

  const [page, setPage] = useRecoilState(pageState);
  const [category] = useRecoilState(categoryState);
  
  const router = useRouter();

  useEffect(()=>{
    router.push(`/board?page=${page}&category=${category}`);
  }, [page])

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
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