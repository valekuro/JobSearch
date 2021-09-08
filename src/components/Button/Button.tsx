import React from 'react'
import styled from "styled-components";
import { theme } from "../Theme/Theme";

interface ButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string;
  }

export default function Button({onClick, children}:ButtonProps){
    return(
        <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
    )
}

export const ButtonStyle = styled.button`
  background-color: ${theme.dark.headerBackground.contrastColor};
  padding: 0.7em;
  color: white;
  font-weight: 800;
  margin:3em;
`;

