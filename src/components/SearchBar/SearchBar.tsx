
import Search from "../Search";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { theme } from "../Theme/Theme";
import { fetchJobsByUser } from "../../utils/requests";

interface SearchBarProps{
  result:any[]
  setResult:React.Dispatch<React.SetStateAction<any[]>>;
}
export default function SearchBar({result, setResult}:SearchBarProps) {
  //const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);
  const [userArray, setUserArray] = useState<string[]>([]);
  const data = useAppSelector((state) => state.JobSlice.jobs);
  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    const allUsersArray: string[] = data.map((user: any) => {
      return user["email"];
    });
    setUserArray(allUsersArray);
  }, [data]);
  useEffect(() => {
    const ciaone = fetchJobsByUser(searchValue);
    ciaone.then((res)=>setResult(res));
  }, [searchValue]);
  return (
    <SearchBarContainer>
      <Search
        radius={"0.5em  0 0 0.5em"}
        setState={setSearchValue}
        userArray={userArray}
        startAdornments={
          <FontAwesomeIcon
            icon={["fas", "search"]}
            style={{
              color: `${theme.dark.headerBackground.contrastColor}`,
            }}
          />
        }
      />
    </SearchBarContainer>
  );
}

export const SearchBarContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-self: center;
  position: relative;
  top: -25px;
  width: 80%;
  background-color: white;
  border-radius: 0.5em;
  padding: 0.2em;
`;
//justify-content: space-evenly;  padding-right:1em;
/*    */
