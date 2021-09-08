import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { setTheme } from "../../components/reducers/ThemeSlice";
import styled from "styled-components";
import Home from '../Home';
import Logo from '../../img/dolly.png'
interface PageLayoutProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PageLayout({ toggle, setToggle }: PageLayoutProps) {
  const dispatch = useAppDispatch();
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);

  useEffect(() => {
    toggle ? dispatch(setTheme("dark")) : dispatch(setTheme("light"));
  }, [toggle]);
  return (
    <PageLayoutExternalContainer colorTheme={colorTheme}>
      <Header toggle={toggle} setToggle={setToggle} logo={Logo}/>
      <Home />
    </PageLayoutExternalContainer>
  );
}

export const PageLayoutExternalContainer = styled.div<{ colorTheme: string }>`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${(props) =>
    props.theme[props.colorTheme].background.primaryColor};
  color: ${(props) => props.theme[props.colorTheme].text.primaryColor};
`;
