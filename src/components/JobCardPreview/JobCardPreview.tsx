import styled from "styled-components";
import CardsBadge from "../CardsBadge";
import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import JobCardDetail from "../JobCardDetails";
export interface JobCardPreviewProps {
  topInformations?: string[];
  title?: string;
  insertBy?: string;
  button?: JSX.Element;
  footer?: string;
  displayBadge: boolean;
  badgeContent?: JSX.Element | string;
  body?: string | undefined;
}

export default function JobCardPreview({
  topInformations,
  title,
  insertBy,
  button,
  footer,
  displayBadge,
  badgeContent,
  body
}: JobCardPreviewProps) {
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
    {showModal && <JobCardDetail showModal={showModal} setShowModal={setShowModal} topInformations={topInformations} title={title} insertBy={insertBy} footer={footer} body={body}/>}
      <JobPreviewContainer
        colorTheme={colorTheme}
        onClick={() => setShowModal(!showModal)}
      >
        {displayBadge ? <CardsBadge content={badgeContent} /> : null}

        {button ? (
          <LayoutWIthButton>
            <TitleContainer>{title}</TitleContainer>
            <ButtonContainer>{button}</ButtonContainer>
          </LayoutWIthButton>
        ) : (
          <>
            <SmallFontContainer>
              {topInformations?.map(
                (singleInformation: string, key: number) => {
                  return <span key={key}>{singleInformation} </span>;
                }
              )}
            </SmallFontContainer>
            <TitleContainer>{title}</TitleContainer>
            <SmallFontContainer>{insertBy}</SmallFontContainer>

            <FooterContainer>{footer}</FooterContainer>
          </>
        )}
      </JobPreviewContainer>
    </>
  );
}

export const JobPreviewContainer = styled.div<{ colorTheme: string }>`
  box-shadow: 0 3px 26px
      ${(props) => props.theme[props.colorTheme].shadows.primaryShadows},
    0 16px 47px
      ${(props) => props.theme[props.colorTheme].shadows.primaryShadows};
  display: flex;
  flex-flow: column wrap;
  padding: 1.5em;
  width: 15em;
  margin: 2em;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme[props.colorTheme].cardColor.primaryColor};
`;

export const SmallFontContainer = styled.div`
  font-size: 0.8em;
`;

export const TitleContainer = styled.div`
  font-weight: bold;
`;

export const FooterContainer = styled(SmallFontContainer)`
  margin-top: 2em;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-self: center;
`;

export const LayoutWIthButton = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: center;
`;
