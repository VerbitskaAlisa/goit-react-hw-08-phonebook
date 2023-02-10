import { Box, Heading, Button, useColorMode, useDisclosure, Container, Spinner } from "@chakra-ui/react";
import ModalWindow from "../../components/Modal/Modal";
import ContactList from "components/ContactsList/ContactList";
import Filter from "components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectError } from "redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/operations.js";

export default function Contacts () {
    const { colorMode } = useColorMode();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    const isLoading = useSelector(selectError);
    
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    return (
       <Box as="main">
        <Box as="section">
        <Container maxW="container.xl" p="30">
            <Box position="relative" mb="16">
              <Heading as='h3' size='2xl' textAlign="center" color={colorMode === "light" ? "#702459" : "#FED7E2"}>My Contacts</Heading>
              <Button ml="auto" display="block" position="absolute" top="0" right="0" borderRadius="50" colorScheme="pink" size="lg" variant='outline' onClick={onOpen}>Add contact</Button>
            </Box>
            <Filter />
            {isLoading && !error && <Spinner color="pink.600"/>}
            {error && <p>{error}</p>}
            {!isLoading && <ContactList />}
            <ModalWindow isOpen={isOpen} onClose={onClose}/>
        </Container>
        </Box>
       </Box>
    )
}