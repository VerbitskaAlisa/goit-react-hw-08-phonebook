import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "redux/contacts/operations.js";
import { selectContacts } from "redux/contacts/selectors";
import { Box, ModalHeader, ModalFooter, ModalCloseButton, ModalBody, FormControl, Input, Button} from "@chakra-ui/react";

export default function AddContactForm ({ onClose }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleInputChange = e => {
       const {name, value} = e.currentTarget;
       switch(name) {
           case 'name':
               setName(value)
               break;
               case 'number':
                   setNumber(value)
                   break;    
            default:
               throw new Error(`Unexeptable name - ${name}`)
       }}
      const handleSubmit = e => {
           e.preventDefault();
   
           if (contacts.find(contact => contact.name === name)) {
                  return alert(`${name} is is already in contacts.`);
           } else {
            dispatch(addContact({name, number}));
            reset();
            onClose();
       }
       }
        
       const reset = () => {
          setName('');
          setNumber('');
       }  

    return (<Box as="form" onSubmit={handleSubmit}>
    <ModalHeader textAlign="center">Add Contact</ModalHeader>
      <ModalCloseButton _hover={{backgroundColor: "pink", borderRadius: "50"}}/>
      <ModalBody pb={6}>
        <FormControl>
          <Input placeholder='First name' focusBorderColor='pink.400'
           variant="flushed" name="name" required onChange={handleInputChange} value={name}/>
        </FormControl>

        <FormControl mt={8}>
          <Input placeholder='Number' focusBorderColor='pink.400'
           variant="flushed" name="number" value={number} required onChange={handleInputChange}/>
        </FormControl>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='pink' mr={3} borderRadius="50" type="submit">
          Add
        </Button>
        <Button onClick={onClose} borderRadius="50">Cancel</Button>
      </ModalFooter>
      </Box>)
}