import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px auto 0 auto !important',
    maxWidth: '1213px',
    backgroundColor: '#181818',
    color: '#fff',
    borderRadius: '6px',
    boxShadow: 'rgba(0, 0, 0, 0.75) 0px 3px 10px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      felxWrap: 'wrap',
    },
    '& .MuiIconButton-root': {
      borderRadius: '50%',
      borderColor: 'rgba(255, 255, 255, 0.5)',
      color: '#fff',
    },
  },

}));
