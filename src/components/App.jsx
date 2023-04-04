import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Container } from './additionalStyles';

export function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
