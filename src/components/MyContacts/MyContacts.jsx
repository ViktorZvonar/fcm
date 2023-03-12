import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactList';
import Filter from './Filter/Filter';

import { Stack, Box } from '@mui/system';
import { Typography } from '@mui/material';

const MyContacts = () => {
  return (
    <Stack
      direction="row"
      sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Box>
        <Typography
          sx={{
            textAlign: 'start',
            marginTop: '30px',
            marginBottom: '30px',
            fontSize: '28px',
            fontWeight: '700',
            color: 'orange',
          }}
          component="h1"
        >
          Add a new contact here
        </Typography>
        <ContactForm />
      </Box>
      <Box>
        <Typography
          sx={{
            textAlign: 'start',
            marginTop: '30px',
            marginBottom: '30px',
            fontSize: '28px',
            fontWeight: '700',
            color: 'orange',
          }}
          component="h1"
        >
          Manage your contacts here
        </Typography>
        <Filter />
        <ContactList />
      </Box>
    </Stack>
  );
};

export default MyContacts;
