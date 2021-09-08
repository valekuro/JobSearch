import React from 'react';
import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import Search from "../Search";
import styled from "styled-components";
import { useAppSelector } from "../../store/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { theme } from "../Theme/Theme";
import {fetchJobsByUser} from '../../utils/requests'
export default function SearchBar() {
  const colorTheme = useAppSelector((state) => state.ThemeSlice.themeSelected);
  const [inputPosition, setInputPosition] = useState<string>("");
  const data = useAppSelector((state) => state.JobSlice.jobs);
  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPosition(e.target.value);
    console.log(e.target.value);
  };
  return (
    <SearchBarContainer>
      <Search
        radius={"0.5em  0 0 0.5em"}
        textIndent={"1.3"}
        placeholder={"Cerca inserzionista..."}
        startAdornments={
          <FontAwesomeIcon
            icon={["fas", "search"]}
            style={{
              position: "absolute",
              left: "1em",
              color: `${theme.dark.headerBackground.contrastColor}`,
            }}
          />
        }
        value={inputPosition}
        onChange={handleSearchUser}
      />
      <Search
        placeholder={"Cerca luogo..."}
        startAdornments={
          <FontAwesomeIcon
            icon={["fas", "map-marker-alt"]}
            style={{
              position: "relative",
              left: "1em",
              color: `${theme.dark.headerBackground.contrastColor}`,
            }}
          />
        }
        onChange={() => console.log("djkhalkdsjh")}
      />
      {/* <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={['a', 'b']}
        renderInput={(params:any) => (
          <TextField
            {...params}
            label="Search input"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />  */}
    </SearchBarContainer>
  );
}

export const SearchBarContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 80%;
  align-self: center;
  position: relative;
  top: -25px;
  padding: 0.2em;
  background-color: white;
  border-radius: 0.5em;
`;
