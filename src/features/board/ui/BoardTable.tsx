'use client'

import styled from "styled-components"
import { boardType } from "../types/table"
import { BoardContentItem } from "./BoardContentItem"

const Box = styled.div`

`

const BoardHeadBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
  border-top: 2px solid black;
`

const BoardHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`

interface BoxProps {
  fixs: boardType[];
  boards: boardType[];
  title: string;
}

export function BoardTable({ fixs, boards, title }: BoxProps) {
  return (
    <Box>
      <BoardHeadBox>
        <BoardHead style={{ width: '7%' }}>번호</BoardHead>
        <BoardHead style={{ width: '7%' }}>말머리</BoardHead>
        <BoardHead style={{ width: '5%' }}></BoardHead>
        <BoardHead style={{ width: '55%' }}>제목</BoardHead>
        <BoardHead style={{ width: '13%' }}>작성자</BoardHead>
        <BoardHead style={{ width: '8%' }}>작성일</BoardHead>
        <BoardHead style={{ width: '7%' }}>조회수</BoardHead>
        <BoardHead style={{ width: '7%' }}>추천</BoardHead>
      </BoardHeadBox>
      {
        fixs.map((value, index) => {
          return (
            <BoardContentItem key={index} index={index} value={value} fix={true} title={title} />
          )
        })
      }
      {boards.map((value, index) => {
        return (
          <BoardContentItem key={index} index={index} value={value} fix={false} title={title} />
        )
      })}
    </Box>
  )
}