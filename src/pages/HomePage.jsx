import { Box } from '@mui/system';

const HomePage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        paddingTop: {
          xs: '20px',
          md: '60px',
          lg: '100px',
        },
      }}
    >
      <Box
        as="h1"
        textTransform="uppercase"
        color="orange"
        sx={{
          width: '60%',
          padding: '10px',
          textAlign: 'center',
          fontSize: {
            xs: '20px',
            md: '32px',
            lg: '48px',
          },
          borderRadius: '5px',
          boxShadow: '0px 0px 20px 5px orange',
          backgroundColor: 'white',
        }}
      >
        Your friends' contacts manager
      </Box>

      <Box
        as="h3"
        sx={{
          width: '20%',
          padding: '10px',
          textAlign: 'center',
          fontSize: {
            xs: '10px',
            sm: '12px',
            md: '18px',
            lg: '24px',
          },
          borderRadius: '5px',
          color: '#1976d2',
          boxShadow: '0px 0px 20px 5px orange',
          backgroundColor: 'white',
        }}
      >
        Register or login
      </Box>
    </Box>
  );
};

export default HomePage;
