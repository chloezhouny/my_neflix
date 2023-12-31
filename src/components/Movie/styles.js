import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  featuredWrapper: {
    // position: 'absolute',
    // top: '0',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '50vw',
    '& .MuiCard-root': {
      borderRadius: '0px',
      boxShadow: 'none',
    },
  },
  featuredCard: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  featuredCardRoot: {
    position: 'relative',
    borderRadius: '0px',
  },
  featuredCardMedia: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backgroundBlendMode: 'darken',
    cursor: 'pointer',
  },
  video: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    // height:'100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    backgroundBlendMode: 'darken',
  },
  featuredCardContent: {
    color: '#fff',
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  featuredCardContentRoot: {
    position: 'relative',
    backgroundColor: 'transparent',
    paddingBottom: '10px !important',
  },
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
  movieCardWrapper: {
    position: 'relative',
   
    
  },
  image: {
    borderRadius: '0.2vw',
    // height: '200px',
    marginBottom: '10px',
    maxWidth: '280px',
    cursor: 'pointer',
     '&:hover': {
      transform: 'scale(1.1)',
      transition: 'transform 500ms',
    },
  },
  movieTitle: {
    position: 'absolute',
    bottom: '0',
    padding: '0 1em',
    textOverflow: 'ellipsis',
    fontSize: '1vw',
    backgroundColor: 'rgba(255,255,255,0.7)',
    color: 'black'
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
  modal: {
    display: 'flex',
    justifyContent: 'center',
    overflow: 'scroll',
    alignItems: 'center',
    '& .MuiModal-backdrop': {
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      overflowY: 'initial !important',
    },
  },
  // container: {
  //   transformOrigin: '50% 12.5%',
  //   transform: 'translate(0%, 0%)',
  //   borderColor: 'rgba(0, 0, 0, 0)',
  //   transition: 'none',
  //   maxHeight: '100vh',
  //   overflowY: 'auto',
  //   width: '70vw',
  //   maxWidth: '1213px',
  //   minWidth: '850px',
  //   [theme.breakpoints.down('md')]: {
  //     width: '100%',
  //     minWidth: '0px',
  //   },
  // },
  container: {

transformOrigin: '20% 12.5%',
    width: '40vw',
    minWidth: '400px',
    maxWidth: '500px',
  },
  fullScreenContainer: {
  transformOrigin: '50% 12.5%',
    transform: 'translate(0%, 0%)',
    borderColor: 'rgba(0, 0, 0, 0)',
    transition: 'none',
    maxHeight: '100vh',
    overflowY: 'auto',
    width: '70vw',
    maxWidth: '1213px',
    minWidth: '850px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      minWidth: '0px',
    },
  },
}));
