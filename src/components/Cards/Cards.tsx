
import styled from "styled-components";

interface CardsProps{
    content: JSX.Element[];
}
export default function Cards({content}:CardsProps){
return (
    <CardsContainer>
        {content.map((singleContent:JSX.Element, index:number)=>{
            return <span key={index}>{singleContent}</span>
        })}
   
    </CardsContainer>
    )
}



export const CardsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin-top: 2em;
`;
