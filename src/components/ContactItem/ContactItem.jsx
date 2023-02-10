import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.js';
import { Avatar, Box, Text, Button } from '@chakra-ui/react';
import { RiDeleteBin6Line } from "react-icons/ri";



const ContactItem = ({id, name, number}) => {
    const dispatch = useDispatch();

    const deleteContacts = () => {
        dispatch(deleteContact(id));
    }


    return (
                <> 
                <Box display="flex" alignItems="center">
                <Avatar mr="4" size="lg" name={name} src='https://bit.ly/tioluwani-kolawole' />
                <Box>
                <Text fontSize="3xl">{name}</Text>
                <Text fontSize="2xl">{number}</Text>
                </Box>
                </Box>
                <Button colorScheme='pink' type="button" borderRadius="50" onClick={deleteContacts}><RiDeleteBin6Line /></Button>
                </>
            )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}


export default ContactItem;