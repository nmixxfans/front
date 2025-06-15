import { useRecoilState } from "recoil";
// import fantube from "../fantube.module.css"
import styled from "styled-components";
import FantubeItem from "./FantubeItem";
import { FantubeType } from "../types/fanchannel";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  width: 100%;
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