'use client'

import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  border-bottom: 1px solid #000;
`

interface WrapperProps {
  children: ReactNode;
}

export function BoardWrapper({ children }: WrapperProps) {

  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}