import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  toolbar: {
    height: '70px',
     [theme.breakpoints.down('sm')]: {
      height: '50px',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.mode === 'light' ? '#FFF3EF' : '#141414',
  },
}));
