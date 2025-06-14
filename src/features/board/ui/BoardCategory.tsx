import styled from "styled-components"

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

  const handleCategoryClick = (name: string) => {
    // setCategory(name);
    // setPage(0);
  }
  return (
    <Component>
      <CategoryInput type="radio" id={id} name={name} hidden defaultChecked={checked} />
      <CategoryLabel htmlFor={id} onClick={() => handleCategoryClick(category)}>{category}</CategoryLabel>
    </Component>
  )
}