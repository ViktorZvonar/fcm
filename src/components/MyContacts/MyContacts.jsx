import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

import { Stack, Box } from '@mui/system';
import { Typography } from '@mui/material';

const MyContacts = () => {
  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      alignItems={{ xs: 'center', md: 'initial' }}
      padding="20px 0"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: {
          xs: '15px',
          sm: '18px',
          md: '20px',
          lg: '20px',
        },
        color: '#010101',
      }}
    >
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '30%',
            lg: '30%',
          },
          marginBottom: { xs: '40px' },
        }}
      >
        <Typography
          sx={{
            padding: '5px',
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: {
              xs: '15px',
              sm: '18px',
              md: '20px',
              lg: '24px',
            },
            textTransform: 'uppercase',
            color: '#1976d2',
            borderRadius: '5px',
            boxShadow: '0px 0px 20px 5px orange',
            backgroundColor: 'white',
          }}
          component="h1"
        >
          Add a new contact
        </Typography>
        <ContactForm />
      </Box>
      <Box
        sx={{
          width: {
            xs: '90%',
            sm: '90%',
            md: '30%',
            lg: '30%',
          },
        }}
      >
        <Typography
          sx={{
            padding: '5px 10px',
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: {
              xs: '15px',
              sm: '18px',
              md: '20px',
              lg: '24px',
            },
            textTransform: 'uppercase',
            color: '#1976d2',
            borderRadius: '5px',
            boxShadow: '0px 0px 20px 5px orange',
            backgroundColor: 'white',
          }}
          component="h1"
        >
          Manage your contacts
        </Typography>
        <Filter />
        <ContactList />
      </Box>
    </Stack>
  );
};

export default MyContacts;
