import { Box } from '@mui/system';

import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box as="h1" textTransform="uppercase" color="orange" paddingTop="60px">
        Welcome to your personal contact manager
      </Box>

      <ContactPhoneOutlinedIcon
        sx={{
          marginRight: 'auto',
          marginLeft: 'auto',

          fontSize: '200px',
          color: '#1976d2',
        }}
      />
      <Box as="h3">Please register or log in</Box>
    </Box>
  );
};

export default HomePage;
