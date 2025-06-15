'use client'

import styled from "styled-components"
import FantubeItemBox from "./FantubeItemBox"
import { FantubeType } from "../types/fanchannel";

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000;
  padding-bottom: 10px;
`

interface BoxProps {
  data: FantubeType[];
}

export function FantubeContentBox({ data }: BoxProps) {

  return (
    <Box>
      <FantubeItemBox data={data} />
    </Box>
  )
}