'use client'

import { useRecoilState } from "recoil"
import styled from "styled-components"
import { categoryState, pageState, searchState, searchTypeState } from "../model/boardState"
import { useRouter } from "next/navigation"

const Component = styled.div`
  
`

const CategoryInput = styled.input`
`

const CategoryLabel = styled.label`
  padding: 0px 4px;
  font-size: 14px;
  margin-right: 8px;
  border-radius: 20px;
  cursor: pointer;
  user-select: none;
  height: fit-content;
  font-family: 'S-CoreDream';

  ${CategoryInput}:checked + & {
    font-family: 'S-CoreDream-9Black';
  }
`

interface ComponentProps {
  id: string;
  name: string;
  category: string;
  checked?: boolean;
}

export function BoardCategory({ id, name, category, checked }: ComponentProps) {

  const [_, setCategory] = useRecoilState(categoryState);
  const [page, setPage] = useRecoilState(pageState);
  const [search, setSearch] = useRecoilState(searchState);
  const [searchType, setSearchType] = useRecoilState(searchTypeState);
  
  const router = useRouter();

  const handleCategoryClick = (name: string) => {
    // 클릭 시 page는 1로 초기화
    // 검색어 + 검색 타입 초기화
    setCategory(name);
    setPage(1);
    setSearch("");
    setSearchType("");
    router.push(`/board?page=1&category=${name}&search=${search}&type=${searchType}`)
  }

  return (
    <Component>
      <CategoryInput type="radio" id={id} name={name} hidden defaultChecked={checked} />
      <CategoryLabel htmlFor={id} onClick={() => handleCategoryClick(category)}>{category}</CategoryLabel>
    </Component>
  )
}