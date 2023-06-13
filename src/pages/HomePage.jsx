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
        Welcome to your contacts manager
      </Box>

      <Box
        as="h3"
        sx={{
          width: '30%',
          padding: '10px',
          textAlign: 'center',
          fontSize: {
            xs: '16px',
            md: '24px',
            lg: '32px',
          },
          borderRadius: '5px',
          boxShadow: '0px 0px 20px 5px orange',
          backgroundColor: 'white',
        }}
      >
        Please register or log in
      </Box>
    </Box>
  );
};

export default HomePage;
