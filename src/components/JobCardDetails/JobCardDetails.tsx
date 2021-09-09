import styled from "styled-components";
import React from "react";
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
  body
}: JobCardDetailProps) {
  return (
    <ModalContainer>
      <div>{footer}</div>
      <div>{title}</div>
      <div>{insertBy}</div>
      <div>{body}</div>
      <div onClick={() => setShowModal(!showModal)}>CLOSE</div>
    </ModalContainer>
  );
}

export const ModalContainer = styled.div`
  position: absolute;
  background-color: blue;
  padding: 2em;
  min-width: 12em;
  height: 12em;
  display: block;
  z-index: 2;
`;
