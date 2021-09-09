import Cards from "../../components/Cards";

import styled from "styled-components";

interface HomeProps{
  dataToShow:JSX.Element[];
}
export default function Home({dataToShow}:HomeProps) {
 
  return (
    <HomeContainer>
      <Cards content={dataToShow} />
    </HomeContainer>
  );
}

export const HomeContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;
