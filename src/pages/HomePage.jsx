import { Box, Typography } from '@mui/material';
import desktopImage from '../assets/photo-0-1.jpg';
import mobileImage from '../assets/photo-0.jpg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LinkInscription } from '../shared/styles/Link.styled';

const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const backgroundImage = isMobile ? mobileImage : desktopImage;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        padding: {
          xs: '20px',
          md: '50px',
        },
      }}
    >
      <Box
        as="h1"
        textTransform="uppercase"
        color="orange"
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '60%',
            lg: '60%',
          },
          padding: '10px',
          textAlign: 'center',
          fontSize: {
            xs: '12px',
            sm: '16px',
            md: '18px',
            lg: '22px',
          },
          borderRadius: '5px',
          boxShadow: '0px 0px 20px 5px orange',
          backgroundColor: 'white',
          marginBottom: '40px',
          '&:hover': {
            backgroundColor: '#ffcc80',
            color: 'white',
          },
        }}
      >
        Your friends' contacts manager
      </Box>

      <Box
        component="img"
        src={backgroundImage}
        alt="friends"
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '60%',
            lg: '60%',
          },
          borderRadius: '5px',
          boxShadow: '5px 5px 15px 5px #000',
        }}
      />

      <Box
        as="h1"
        color="#1976d2"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minWidth: {
            xs: '60%',
            sm: '50%',
            md: '30%',
            lg: '30%',
          },
          padding: '5px 10px',
          textAlign: 'center',
          fontSize: {
            xs: '12px',
            sm: '16px',
            md: '18px',
            lg: '22px',
          },
          borderRadius: '5px',
          boxShadow: '0px 0px 20px 5px #1976d2',
          backgroundColor: 'white',
          marginTop: '60px',
        }}
      >
        <Typography
          component={LinkInscription}
          to="/register"
          color="inherit"
          variant="inherit"
          marginRight="10px"
        >
          REGISTER
        </Typography>
        {'  '}
        or{'  '}
        <Typography
          component={LinkInscription}
          to="/login"
          color="inherit"
          variant="inherit"
          marginLeft="10px"
        >
          LOGIN
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
