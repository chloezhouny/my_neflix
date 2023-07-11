import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  appBarWrapper: {
    height: '50px',
    [theme.breakpoints.down('sm')]: {
      height: '30px',
    },
    '& .MuiContainer-root': {
      padding: '0 4vw',
    },
  },
  menuContainer: {
    display: 'flex',
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.mode === 'light' ? '#FFF3EF !important' : '#000 !important',
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    gap: '2vw',
  },
  genreBtnContainer: {
    display: 'inline',
  },
  genreMenuLinks: {
    color: theme.palette.mode === 'light' ? '#485863' : '#fff',
    fontWeight: theme.palette.mode === 'light' ? 'bold' : 'normal',
    '&:active': {
      fontWeight: theme.palette.mode === 'light' ? 'normal' : 'bold',
    },
    textDecoration: 'none',
    '& .MuiMenuItem-root': {
      padding: '0px',
      fontSize: '1vw',
    },
  },
  wrapper: {
    position:'relative',
    marginTop: '-9vw',
    color: theme.palette.mode === 'light' ? 'black' : 'white',
  },
  content: {
    margin: '0px 4vw',
  },

}));
