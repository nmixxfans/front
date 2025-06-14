'use client'

import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  /* 기본 PC 버전 가로 길이 */
  width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

interface ContainerProps {
  children: ReactNode;
  style?: React.CSSProperties;
}

export function DefaultContainer({ children, style }: ContainerProps) {
  return (
    <Container style={style}>
      {children}
    </Container>
  )
}