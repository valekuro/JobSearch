import ThemeSwitch from "../ThemeSwitch";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Search from "../Search";

interface HeaderProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  logo: string;
}
export default function Header({ toggle, setToggle, logo }: HeaderProps) {
  const dispatch = useAppDispatch();
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);
  return (
    <>
      <HeaderContainer colorTheme={colorTheme}>
        <LogoStyle src={logo} />
        <ThemeSwitch toggle={toggle} setToggle={setToggle} />
      </HeaderContainer>
      <Search/>
    </>
  );
}

export const HeaderContainer = styled.div<{ colorTheme: string }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme[props.colorTheme].headerBackground.primaryColor},
    ${(props) => props.theme[props.colorTheme].headerBackground.secondaryColor},
    ${(props) => props.theme[props.colorTheme].headerBackground.tertiaryColor},
    ${(props) => props.theme[props.colorTheme].headerBackground.contrastColor}
  );
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  border-radius: 0px 0px 0px 70px;
  padding: 2em;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const LogoStyle = styled.img`
  width: 4em;
`;
