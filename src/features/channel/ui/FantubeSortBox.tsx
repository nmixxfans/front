'use client'

import { ChangeEvent } from "react"
import styled from "styled-components"

const Box = styled.div`
`

const SortSelect = styled.select`
  height: 30px;
  outline: none;
  border-radius: 25px;
  width: 100px;
  text-align: center;
  border: 1px solid #000;
`

export function FantubeSortBox() {

  const handleChangeSort = (e: ChangeEvent<HTMLSelectElement>) => {
    // setEnd(false);
    // setSort(e.target.value as "sub" | "name" | "view");
    // setFantubeData([]);
    // setFetching(true);
    // setPage(0);
  }

  return (
    <Box>
      <SortSelect onChange={(e: ChangeEvent<HTMLSelectElement>) => handleChangeSort(e)}>
        <option value="sub">구독순</option>
        <option value="view">조회순</option>
        <option value="name">사전순</option>
      </SortSelect>
    </Box>
  )
}