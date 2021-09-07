import styled from "styled-components";
import CardsBadge from '../CardsBadge'
import { useAppSelector } from "../../store/hooks";

export interface JobCardPreviewProps{
    topInformations?: string[],
    title?: string,
    insertBy?: string,
    footer?:string
}

export default function JobCardPreview({topInformations, title, insertBy, footer}:JobCardPreviewProps) {
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);

    return (
      <JobPreviewContainer colorTheme={colorTheme}>
        <CardsBadge/>
        <SmallFontContainer> 
            {
            topInformations?.map((singleInformation:string, key:number)=>{
                return <span key={key}>{singleInformation} </span>
            })
            }
        </SmallFontContainer>
        <TitleContainer>{title}</TitleContainer>
        <SmallFontContainer>{insertBy}</SmallFontContainer>
        <FooterContainer>{footer}</FooterContainer>
      </JobPreviewContainer>
    );
  }
  

export const JobPreviewContainer = styled.div<{colorTheme:string}>`
  box-shadow: 0 3px 26px ${(props) =>
    props.theme[props.colorTheme].shadows.primaryShadows}, 0 16px 47px ${(props) =>
      props.theme[props.colorTheme].shadows.primaryShadows};
  display: flex;
  flex-flow: column wrap;
  padding: 1.5em;
  width: 18em;
  margin: 2em;
  background-color:${(props) =>
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
