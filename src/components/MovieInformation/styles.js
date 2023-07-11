import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  closeIconWrapperExpanded: {
    position: 'absolute',
    top: '2vw',
    right: '4vw',
    '& .MuiButtonBase-root': {
      backgroundColor: 'black',
    },
  },
  closeIconWrapper: {
    position: 'absolute',
    top: '1.5vw',
    right: '1.5vw',
    '& .MuiButtonBase-root': {
      backgroundColor: 'black',
    },
  },
  container: {
    position: 'relative',
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
  },
  buttonGroupWrapper: {
    width: '40%',
    position: 'absolute',
    bottom: '11vh',
    left: '1.5vw',
    '& .MuiIconButton-root': {
      borderRadius: '50% !important',
      borderColor: 'rgba(255, 255, 255, 0.5) !important',
      color: '#fff !important',
    },
    '& .MuiButtonBase-root': {
      border: '2px solid rgba(255, 255, 255, 0.5) !important',
      '&:hover': {
        border: '2px solid rgba(255, 255, 255, 1) !important',
      },
    },
  },
  buttonGroupWrapperExpanded: {
    position: 'fixed',
    bottom: '30vh',
    left: '4vw',
    right: '4vw',
    '& .MuiIconButton-root': {
      borderRadius: '50% !important',
      borderColor: 'rgba(255, 255, 255, 0.5) !important',
      color: '#fff !important',
    },
    '& .MuiButtonBase-root': {
      border: '2px solid rgba(255, 255, 255, 0.5) !important',
      '&:hover': {
        border: '2px solid rgba(255, 255, 255, 1) !important',
      },
    },
  },

  poster: {
    borderRadius: '5px',
    width: '100%',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto',
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      width: '100%',
    },
  },
  ratingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'bottom',
    marginRight: '1em',
  },
  rating: {
    marginRight: '0.5em',
  },
  expandMoreIcon: {
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  links: {
    textDecoration: 'none',
    color: 'rgb(72, 88, 99)',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  rightContainer: {
    opacity: 0.9,
    fontSize: '14px',
    lineHeight: '20px',
  },
  video: {
    // position: 'absolute',
    // top: 0,
    // right: 0,
    width: '100%',
    // height:'100%',
    // backgroundColor: 'rgba(0,0,0,0.3)',
    // backgroundBlendMode: 'darken',
  },

}));
