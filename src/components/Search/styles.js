import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles((theme) => ({
  searchContainer: {
    display: 'inline-block',
    position: 'relative',
    borderRadius: '2px',
    backgroundColor: theme.palette.mode === 'light' ? alpha('#141414', 0.85) : alpha('#141414', 0.15),
    '&:hover': {
      backgroundColor: theme.palette.mode === 'light' ? alpha('#141414', 0.85) : alpha('#141414', 0.25),
    },
    borderColor: theme.palette.mode === 'light' ? '' : 'white',
    marginLeft: 0,
    width: 'auto',
    height: '70%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
    },
    // [theme.breakpoints.up('sm')]: {
    //   height: 'none',
    // },
  },
  searchIconWrapper: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    color: 'inherit',
    '& .MuiInputBase-input': {
      // fontSize: '16px',
      color: 'white',
      padding: theme.spacing(1, 1, 1, 1),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create('width'),
      width: '6ch',
      height: '100%',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '8ch',
        '&:focus': {
          width: '15ch',
        },
      },
    },
  },

}));
