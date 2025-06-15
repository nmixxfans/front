'use client'

import styled from "styled-components"
import { FantubeCountryBox } from "./FantubeCountryBox"
import { FantubeSortBox } from "./FantubeSortBox"

const Box = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export function FantubeCategoryBox() {
  return (
    <Box>
      <FantubeCountryBox />
      <FantubeSortBox />
    </Box>
  )
}