import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    marginLeft: '-24px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      // width: '90% !important',
      margin: 'auto',
    },
  },
}));
