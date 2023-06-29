import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  wrapper: {
    margin: '3vw 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'relative',
    width: '100%',
  },
  title: {
    marginBottom: '0.7em',
    fontWeight: 'bold',
    fontSize: '1.4vw',
    lineHeight: '1.2vw',
    verticalAlign: 'bottom',
    color: theme.palette.mode === 'light' ? '#485863' : '#fff',
  },
}));
