import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  wrapper: {
    paddingTop: '2px',
    '& .MuiListItem-root': {
      paddingTop: '0',
      paddingLeft: '20px',
      paddingBottom: '0',
      marginBottom: '10px',
      height: '10px',
    },
    color: 'grey',
    '& .MuiTypography-root': {
      fontSize: '10px',
      lineHeight: '10px',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      fontWeight: '700',
    },

  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content !important',
    '& .MuiListItem-root': {
      padding: '10px 20px',
      marginBottom: '10px',
    },
    '& .MuiListItemIcon-root': {
      minWidth: '20px',
      marginRight: '8px',
      height: '20px',
    },
  },
  links: {
    color: 'grey',
    textDecoration: 'none',
  },
  activeLinks: {
    color: 'white',
    textDecoration: 'none',
  },
}));
