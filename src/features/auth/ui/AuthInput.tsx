'use client'

import { ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components"

const Component = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid #ebebeb;
  padding: 10px;
  outline: none;
  border-radius: 5px;

  &:focus {
    outline: 2px solid #d9e3ff;
  }
`

interface ComponentProps {
  ref?: React.Ref<HTMLInputElement>;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "password"
}

export function AuthInput({ ref, placeholder, value, type, onChange, onKeyDown }: ComponentProps) {
  return (
    <Component
      ref={ref}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type={type}
    />
  )
}