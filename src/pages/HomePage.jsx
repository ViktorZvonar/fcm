import { Box } from '@mui/system';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

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
          width: '100%',
          textAlign: 'center',
          fontSize: {
            xs: '20px',
            md: '32px',
            lg: '48px',
          },
        }}
      >
        Welcome to your personal contacts manager
      </Box>

      <ContactPhoneOutlinedIcon
        sx={{
          marginRight: 'auto',
          marginLeft: 'auto',
          fontSize: {
            xs: '100px',
            md: '150px',
            lg: '200px',
          },
          color: '#1976d2',
        }}
      />
      <Box
        as="h3"
        sx={{
          fontSize: {
            xs: '16px',
            md: '24px',
            lg: '32px',
          },
        }}
      >
        Please register or log in
      </Box>
    </Box>
  );
};

export default HomePage;
