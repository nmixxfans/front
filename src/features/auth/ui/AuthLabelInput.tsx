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

const SignupInput = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 15px;
  border: 1px solid #cfcfcf;
  padding: 10px;
  outline: none;

  &:focus{
    border: 1px solid #000;
  }
`

const SignupLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  padding-bottom: 3px;
  display: block;
`

interface ComponentProps {
  id: string;
  ref?: React.Ref<HTMLInputElement>;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  type?: "text" | "password"
}

export function AuthLabelInput({ placeholder, value, type, ref, id, onChange, onKeyDown,  }: ComponentProps) {
  return (
    <Component>
      <SignupInput
        id={id}
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type} />
      <SignupLabel htmlFor={id}></SignupLabel>
    </Component>
  )
}