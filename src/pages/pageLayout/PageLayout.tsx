import Header from "../../components/Header";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState, useRef } from "react";
import { setTheme } from "../../components/reducers/ThemeSlice";
import styled from "styled-components";
import Home from "../Home";
import Logo from "../../img/dolly.png";
import Button from "../../components/Button";

import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobCardPreview from "../../components/JobCardPreview";
import { fetchJobs } from "../../utils/requests";
import Footer from "../../components/Footer/Footer";
interface PageLayoutProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PageLayout({ toggle, setToggle }: PageLayoutProps) {
  const dispatch = useAppDispatch();
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);
  const [result, setResult] = useState<any[]>([]);

  useEffect(() => {
    toggle ? dispatch(setTheme("dark")) : dispatch(setTheme("light"));
  }, [toggle]);

  const jobsNumberToShow: number = 11;
  const [cardToShow, setCardToShow] = useState<number>(jobsNumberToShow);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);
  const data = useAppSelector((state) => state.JobSlice.jobs);
  const [partialData, setPartialData] = useState<any[]>(
    data.slice(0, jobsNumberToShow)
  );
  useEffect(() => {
    setPartialData(data.slice(0, jobsNumberToShow));
  }, [data]);
  const handleNextJobsToShow = () => {
    setPartialData(data.slice(cardToShow, cardToShow + jobsNumberToShow));
    setCardToShow(cardToShow + jobsNumberToShow);
  };
  const myRef:any = useRef<React.LegacyRef<HTMLSpanElement> | undefined>();
  console.log(myRef);

  const jobsCardComplete:()=>JSX.Element[] = () => {
    const jobsCardArray: JSX.Element[] = partialData.map((elem) => {
      return (
        <JobCardPreview
          body={elem['body']}
          topInformations={["5h ago", elem["time"]]}
          title={elem["name"]}
          insertBy={elem["email"]}
          footer={`Luogo : ${elem["postId"]}`}
          displayBadge={true}
          badgeContent={<FontAwesomeIcon icon={["fas", "laptop-house"]} />}
          enableOnClick ={true}
          ref={myRef}
        />
      );
    });
    jobsCardArray.push(
      <JobCardPreview
        title={"Vuoi vedere altri annunci?"}
        button={<Button onClick={handleNextJobsToShow} children={"Next"} />}
        displayBadge={false}
        enableOnClick = {false}
      />
    );
    return jobsCardArray;
  };

  const jobsSearchCard:()=>JSX.Element[] = () => {
    const jobsCardArray: JSX.Element[] = result.map((elem) => {
      return (
        <JobCardPreview
          topInformations={["5h ago", elem[0]["time"]]}
          title={elem[0]["name"]}
          body={elem[0]['body']}
          insertBy={elem[0]["email"]}
          footer={`Luogo : ${elem[0]["postId"]}`}
          displayBadge={true}
          badgeContent={<FontAwesomeIcon icon={["fas", "laptop-house"]} />}
          enableOnClick = {true}
        />
      );
    });
    jobsCardArray.push(
      <JobCardPreview
        title={"Vuoi vedere tutti gli annunci?"}
        button={<Button onClick={()=>setResult([])} children={"Torna indietro"} />}
        displayBadge={false}
        enableOnClick = {false}
      />
    );
    return jobsCardArray;
  };

  return (
      <PageLayoutExternalContainer colorTheme={colorTheme}>
                   <span ref={myRef}> </span> 

        <Header
          toggle={toggle}
          setToggle={setToggle}
          logo={Logo}
          searchResult={result}
          setSearchResult={setResult}
        />

        { result.length!==0 ? <Home dataToShow={jobsSearchCard()} /> : <Home dataToShow={jobsCardComplete()}/>}
      </PageLayoutExternalContainer>
  );
}

export const PageLayoutExternalContainer = styled.div<{ colorTheme: string }>`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${(props) =>
    props.theme[props.colorTheme].background.primaryColor};
  color: ${(props) => props.theme[props.colorTheme].text.primaryColor};
  min-height: 47.5em;
`;
