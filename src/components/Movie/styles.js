import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  imageContainer: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  links: {
    alignItems: 'center',
    fontWeight: 'bolder',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  },
  image: {
    borderRadius: '0.2vw',
    // height: '200px',
    marginBottom: '10px',
  },
  title: {
  	color: '#485863',
  	textOverlow: 'ellipsis',
  	width: '230px',
  	whiteSpace: 'nowrap',
  	overflow: 'hidden',
  	marginTop: '10px',
  	marginBottom: 0,
  	textAlign: 'center',
  },
}));
