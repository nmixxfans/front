'use client'

import styled from "styled-components"
import { SignupManagementBox } from "./SignupManagementBox"

const Box = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  border: 1px solid #000;
  border-radius: 5px;
`

export function SignupBox() {
  return (
    <Box>
      <SignupManagementBox />
    </Box>
  )
}