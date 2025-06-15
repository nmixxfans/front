'use client'

import { Title } from "@/shared/ui/Title";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const MVBox = styled.div`
  
`

const Iframe = styled.iframe`
  width: 100%;
  height: 565px;
  border-radius: 10px;
`

export function RecentMVBox() {
  return (
    <Box>
      <MVBox>
        <Iframe src="https://www.youtube.com/embed/aFrQIJ5cbRc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </MVBox>
    </Box>
  )
}