import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import { nodeModuleNameResolver } from 'typescript';

const createStyles = (theme: Theme) => ({
  
  margin: {
    margin: theme.spacing,
    border: 'none',
    width: '100%',
  },
});

const useStyles = makeStyles(createStyles);

export default useStyles;