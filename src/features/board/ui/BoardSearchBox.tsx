'use client'

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import styled from "styled-components"

const Box = styled.div`
  display: flex;
  gap: 5px;
  height: 25px;
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

}

export function BoardSearchBox({ }: BoxProps) {

  // type 변수 이름 변경 필요
  const [searchData, setSearchData] = useState<string>(""); //검색 input value
  const [type, setType] = useState<string>(""); //검색 select value

  const handleSearchEnter = async () => {

  }

  return (
    <Box>
      <BoardSearchSelect onChange={(e) => setType(e.target.value)} >
        <option value={"content"}>내용</option>
        <option value={"titleAndContent"}>제목+내용</option>
        <option value={"writer"}>작성자</option>
      </BoardSearchSelect>
      <BoardSearchInput type="text"
        onChange={(e) => setSearchData(e.target.value)}
        onKeyDown={(e) => { if (e.key === "Enter") { handleSearchEnter() } }}
      />
      <BoardSearchButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </BoardSearchButton>
    </Box>
  )
}