'use client'

import styled from "styled-components";
import FantubeItem from "./FantubeItem";
import { FantubeType } from "../types/fanchannel";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`

interface BoxProps {
  data: FantubeType[];
}

export default function FantubeItemBox({ data }: BoxProps) {

  return (
    <Box>
      {
        data.map((value, index) => {
          return (
            <FantubeItem key={index} value={value} />
          )
        })
      }
    </Box>
  )
}