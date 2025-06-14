'use client'

import styled from "styled-components";
import { BoardBox } from "./BoardBox";
import { ItemProps } from "@/app/shared/types/board";
import { faBell, faComments } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`



interface ContainerProps {
  notice: ItemProps[];
  free: ItemProps[];
}

export function BoardContainer({ notice, free }: ContainerProps) {
  return (
    <Container>
      <BoardBox data={free} title="자유게시판" icon={faComments} />
      <BoardBox data={notice} title="공지사항" icon={faBell} />
    </Container>
  )
}