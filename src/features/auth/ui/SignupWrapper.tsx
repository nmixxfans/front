'use client'

import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

interface WrapperProps {
  children: ReactNode;
}

export function SignupWrapper({ children }: WrapperProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}