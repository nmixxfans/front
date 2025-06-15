'use client'

import styled from "styled-components"
import { Country } from "../types/fanchannel"

const Box = styled.div`
  display: flex;
  gap: 5px;

`

const CategoryInput = styled.input`
  
`

const CategoryButton = styled.label`
  padding: 6px 24px;
  font-size: 15px;
  border: 1px solid #000;
  border-radius: 25px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  ${CategoryInput}:checked + &{
    color: #fff;
    background-color: #000;
  }
`

export function FantubeCountryBox() {

  const handleClickCountry = (countrys: Country) => {
    // setEnd(false);
    // setCountry(countrys);
    // setFantubeData([]);
    // setFetching(true);
    // setPage(0);
  }

  return (
    <Box>
      <CategoryInput type="radio" id="kor" name="category" defaultChecked hidden />
      <CategoryButton htmlFor="kor" onClick={() => handleClickCountry("ko")}>국내</CategoryButton>
      <CategoryInput type="radio" id="for" name="category" hidden />
      <CategoryButton htmlFor="for" onClick={() => handleClickCountry("fo")}>해외</CategoryButton>
    </Box>
  )
}