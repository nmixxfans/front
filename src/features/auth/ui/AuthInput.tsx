'use client'

import { ChangeEvent, forwardRef, KeyboardEvent } from "react";
import styled from "styled-components"

const Component = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid #ebebeb;
  padding: 10px;
  outline: none;
  border-radius: 5px;

  &:focus {
    outline: 1px solid #000;
  }
`

interface ComponentProps {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "password"
}

export const AuthInput = forwardRef<HTMLInputElement, ComponentProps>(
  ({ placeholder, value, type = "text", onChange, onKeyDown }, ref) => {
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
)