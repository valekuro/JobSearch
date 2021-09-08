import Cards, { CardsContainer } from "../../components/Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobCardPreview from "../../components/JobCardPreview";
import { fetchJobs } from "../../utils/requests";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
export default function Home() {
  const dispatch = useAppDispatch();
  const jobsNumberToShow: number = 10;
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
  const jobsCardComplete = () => {
    const jobsCardArray: JSX.Element[] = partialData.map((elem) => {
      return (
        <JobCardPreview
          topInformations={["5h ago", elem["time"]]}
          title={elem["name"]}
          insertBy={elem["email"]}
          footer={elem["postId"]}
          displayBadge={true}
          badgeContent={<FontAwesomeIcon icon={["fas", "laptop-house"]} />}
        />
      );
    });
    jobsCardArray.push(
      <JobCardPreview
        title={"Vuoi vedere altri annunci?"}
        button={<Button onClick={handleNextJobsToShow} children={"Next"} />}
        displayBadge={false}
      />
    );
    return jobsCardArray;
  };

  return (
    <HomeContainer>
      <Cards content={jobsCardComplete()} />
    </HomeContainer>
  );
}

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;
