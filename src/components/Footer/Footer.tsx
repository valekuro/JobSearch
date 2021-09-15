import styled from "styled-components";
import { theme } from "../Theme/Theme";
import { useAppSelector } from "../../store/hooks";

export default function Footer() {
    const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);

  return (
    <FooterContainer colorTheme={colorTheme}>
      <div>hjgjh</div>
    </FooterContainer>
  );
}

export const FooterContainer = styled.div<{colorTheme:string}>`
  display: flex;
  flex-flow: row nowrap;
  height: 5em;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background-color: ${(props) => props.theme[props.colorTheme].headerBackground.primaryColor}
`;
