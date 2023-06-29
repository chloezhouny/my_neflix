import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      width: '100% !important',
    },
  },
  movie: {
    padding: '10px',
  },
}));
