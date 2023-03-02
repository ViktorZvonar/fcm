import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',

        marginLeft: 30,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <Form />
      </div>
      <div>
        <h1>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
