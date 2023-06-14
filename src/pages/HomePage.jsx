import { Box } from '@mui/system';
import image from '../assets/pexels.jpg';

const HomePage = () => {
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
            xs: '14px',
            sm: '18px',
            md: '20px',
            lg: '25px',
          },
          borderRadius: '5px',
          boxShadow: '0px 0px 20px 5px orange',
          backgroundColor: 'white',
        }}
      >
        Your friends' contacts manager
      </Box>

      <Box
        component="img"
        src={image}
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
    </Box>
  );
};

export default HomePage;
