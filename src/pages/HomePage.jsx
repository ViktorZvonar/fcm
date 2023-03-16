import { Box } from '@mui/system';

// import { Report } from 'notiflix/build/notiflix-report-aio';

import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const HomePage = () => {
  // Report.warning(
  //   'Cherish your friends :)',
  //   '"True friends are like diamonds." <br/><br/>- Nicole Richie',
  //   'I will'
  // );

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box as="h1" textTransform="uppercase" color="orange" paddingTop="60px">
        Welcome to your personal contacts manager
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
