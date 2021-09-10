import styled from "styled-components";
import React from "react";
import { useAppSelector } from "../../store/hooks";
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
      <InternalContainer>
        <HeaderModal>
          <div>{footer}</div>
          <div>{insertBy}</div>
          {topInformations?.map((info, key) => {
            <span key={key}>{info}</span>;
          })}
          <div onClick={() => setShowModal(!showModal)}>CLOSE</div>
        </HeaderModal>
        <BodyModal>
          <Title>{title}</Title>
          <div>{body}</div>
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
  justify-content: space-around;
`;

export const InternalContainer = styled.div``;

export const BodyModal = styled.div``;


export const Title = styled.div`

    font-size:20px;
`