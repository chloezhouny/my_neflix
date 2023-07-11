import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({

  wrapper: {
    width: '100%',
    height: '70px',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
    },
    '& .MuiContainer-root': {
      padding: '0 4vw',
    },
  },
  // appbar leftside
  mobileNav: {
    display: 'flex',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  imageLink: {
    padding: '2%',
    marginRight: '20px',
  },
  mobileMenuButton: {
    display: 'flex',
    flexGrow: 1,
    flex: '50%',
  },
  mobileMenuContainer: {
    display: 'flex',
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.mode === 'light' ? '#FFF3EF !important' : 'black !important',
    },
  },
  mobileMenuLinks: {
    color: theme.palette.mode === 'light' ? '#485863' : '#fff',
    fontWeight: theme.palette.mode === 'light' ? 'bold' : 'normal',
    '&:active': {
      fontWeight: theme.palette.mode === 'light' ? 'normal' : 'bold',
    },
    textDecoration: 'none',
    '& .MuiMenuItem-root': {
      padding: '15px 30px',
    },
  },
  nav: {
    display: 'flex',
    flexGrow: 1,
    gap: '2px',
  },
  navItem: {
    display: 'block',
    fontSize: '2vw',
  },
  // appbar rightside
  rightContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexGrow: 0,
    justifyContent: 'right',
    alignItems: 'end',
    gap: '5%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
    },
  },
  profileButton: {
    display: 'inline-block',
  },
  profileMenu: {
    marginTop: '45px',
    '& .MuiMenu-paper': {
      backgroundColor: theme.palette.mode === 'light' ? '#FFF3EF !important' : 'black !important',
    },
  },
 
}));
