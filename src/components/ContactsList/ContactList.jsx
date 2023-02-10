import ContactItem from "../ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { Grid, GridItem, useColorMode } from "@chakra-ui/react";
import { selectContacts, selectFilter } from "redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);
  const { colorMode } = useColorMode();

 
  
  const getFilteredContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

   return (<Grid templateColumns='repeat(3, 1fr)' gap={8}>
      {contacts.length > 0 && getFilteredContacts().map(({ id, name, number }) => {
        return (
          <GridItem key={id} w='100%' display="flex" alignItems="center" justifyContent="space-between" bg={colorMode === "light" ? "#FED7E2" : "#B83280"}  p="4" borderRadius="50" >
            <ContactItem  id={id}
                          name={name} 
                          number={number}
                        />
           </GridItem>
        )
      })}
   </Grid>
    )
}

export default ContactList;

