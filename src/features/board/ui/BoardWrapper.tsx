import { ReactNode } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  
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