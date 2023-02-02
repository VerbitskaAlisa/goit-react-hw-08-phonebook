import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { DeleteBtn, NameText, NumberText } from './ContactItem.styled';


const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch();

    const deleteContacts = () => {
        dispatch(deleteContact(id));
    }


    return (
                <>
                <NameText>{name}</NameText>
                <NumberText>{number}</NumberText>
                <DeleteBtn type="button" onClick={deleteContacts}>Delete</DeleteBtn>
                </>
            )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}


export default ContactItem;