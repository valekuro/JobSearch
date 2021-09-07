import styled from "styled-components";

export default function Search() {
  return (
    <>
      <InputSearch placeholder={'Cerca...'}></InputSearch>
    </>
  );
}


export const InputSearch = styled.input`
  padding:1em;
`;