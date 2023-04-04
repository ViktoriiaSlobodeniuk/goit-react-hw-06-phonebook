import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';

export const ContactsList = () => {
  let contacts = useSelector(state => state.contacts);
  const contactFilter = useSelector(state => state.filter);
  if (contactFilter.length) {
    const lowerCasedFilter = contactFilter.toLowerCase();
    contacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCasedFilter)
    );
  }

  return contacts.map(({ id, name, number }) => (
    <ContactItem key={id} name={name} number={number} id={id} />
  ));
};
