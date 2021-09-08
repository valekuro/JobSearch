import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ThemeSwitchProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ThemeSwitch({ toggle, setToggle }: ThemeSwitchProps) {
  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          {" "}
          <FontAwesomeIcon icon={["fas", "sun"]} />
        </Grid>
        <Grid item>
          <Switch
            checked={toggle}
            onChange={() => setToggle(!toggle)}
            name="checkedC"
          />
        </Grid>
        <Grid item><FontAwesomeIcon icon={["fas", "moon"]} /></Grid>
      </Grid>
    </Typography>
  );
}
