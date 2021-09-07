import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
interface ThemeSwitchProps{
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ThemeSwitch({toggle, setToggle}: ThemeSwitchProps){

    return(
        <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Light</Grid>
          <Grid item>
            <Switch checked={toggle} onChange={()=>setToggle(!toggle)} name="checkedC" />
          </Grid>
          <Grid item>Dark</Grid>
        </Grid>
      </Typography>
    )
}