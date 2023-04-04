import { useDispatch } from 'react-redux';
import { Contact, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Contact>
      <p>{name}</p>
      <p>{number}</p>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
