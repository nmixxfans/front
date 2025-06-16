'use client'

import styled from "styled-components"
import { SigninManagementBox } from "./SigninManagementBox"

const Box = styled.div`
  width: 300px;
  height: 330px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  border-radius: 5px;
`

export function SigninBox() {
  return (
    <Box>
      <SigninManagementBox />
    </Box>
  )
}