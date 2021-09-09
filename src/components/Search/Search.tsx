import Autocomplete from "@material-ui/core/Autocomplete";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";
import {useRef} from 'react'
interface SearchProps {
  radius?: string;
  startAdornments?: JSX.Element;
  userArray: any[];
  setState: React.Dispatch<React.SetStateAction<string>>;
}
export default function Search({
  radius,
  startAdornments,
  userArray,
  setState
}: 
SearchProps) {
  const styles = useStyles();
const handleAutocompleteChange = (value:string)=>{
  setState(value)
}

  return (
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        options={userArray}
        style={{
          display: 'flex',
          alignSelf: 'center',
          fontSize: 12,
          textIndent: "0.5em",
          borderTop: "none",
          borderBottom: "none",
          borderLeft: "none",
         // borderRight: "1px solid #c2c2c2",
          borderRadius: `${radius}`,
         width: '100%'
        }}
        onChange={(event, value) => handleAutocompleteChange(value)} // prints the selected value
        renderInput={(params: any) => (
          <TextField
            {...params}
            fullWidth
            className={styles.margin}
            margin="normal"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              //type: "search",
              startAdornment: startAdornments,
            }}
          />
        )}
      />
  );
}

