import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

export default makeStyles((theme) => ({
  wrapper: {
    height: '70px',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
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
  search: {
    display: 'inline-block',
    position: 'relative',
    borderRadius: '2px',
    backgroundColor: alpha('#141414', 0.15),
    '&:hover': {
      backgroundColor: alpha('#141414', 0.25),
    },
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
  profileButton: {
    display: 'inline-block',
  },
  profileMenu: {
    marginTop: '45px',
  },

}));
