import styled from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../store/hooks";
import { theme } from "../Theme/Theme";

interface JobCardDetailProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  topInformations?: string[];
  title?: string;
  insertBy?: string;
  footer?: string;
  body?: string | undefined;
}
export default function JobCardDetail({
  showModal,
  setShowModal,
  topInformations,
  title,
  insertBy,
  footer,
  body,
}: JobCardDetailProps) {
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);

  return (
    <ModalContainer colorTheme={colorTheme}>
      <div onClick={() => setShowModal(!showModal)} style={{textAlign:'right'}}>
            <FontAwesomeIcon
            icon={["fas", "times-circle"]}
            style={{
              color: `${theme.dark.headerBackground.contrastColor}`,
              fontSize: '1.5em'
            }}
          />
          </div>
      <InternalContainer>
        <HeaderModal>
          <div>{footer}</div>
          <div>{insertBy}</div>
          {topInformations?.map((info, key) => {
            <span key={key}>{info}</span>;
          })}
          
        </HeaderModal>
        <BodyModal>
          <Title>{title}</Title>
          <Body>{body}</Body>
        </BodyModal>
      </InternalContainer>
    </ModalContainer>
  );
}

export const ModalContainer = styled.div<{ colorTheme: string }>`
  position: absolute;
  background-color: ${(props) =>
    props.theme[props.colorTheme].cardColor.primaryColor};
  color: ${(props) => props.theme[props.colorTheme].text.primaryColor};
  padding: 2em;
  min-width: 12em;
  max-width: 24em;
  min-height: 12em;
  display: block;
  z-index: 2;
`;

export const HeaderModal = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 2em;
  justify-content: space-between;
`;

export const InternalContainer = styled.div``;

export const BodyModal = styled.div``;

export const Body = styled.p`
text-align: justify;
`;

export const Title = styled.h2`
text-align: center;
text-transform: uppercase;
`