'use client'

import { PageTitle } from "@/shared/ui/PageTitle"
import styled from "styled-components"
import { FantubeCategoryBox } from "./FantubeCategoryBox"

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
  width: 100%;
`

export function FantubeManagementBox() {

  return (
    <Box>
      <PageTitle>NMIXX FAN CHANNEL</PageTitle>
      <FantubeCategoryBox />
    </Box>
  )
}