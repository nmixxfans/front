'use client'

import "@/app/asset/css/pagination.css";
import { useState } from "react";
import Pagination from "react-js-pagination"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  justify-content: center;
`

interface BoxProps {

}

export function BoardPaginationBox({ }: BoxProps) {

  // todo : recoil로 변경해야함
  const [page, setPage] = useState<number>(0); //페이지
  const [totalCount, setTotalCount] = useState<number>(0);

  // useEffect(() => {
  //   if (page === 0) {
  //     setPage(1);
  //     return;
  //   }
  //   setFixs([]);
  //   setBoards([]);
  //   getData();
  // }, [page])


  const handlePageChange = (pageNumber: number) => {
    // setPage(pageNumber);
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