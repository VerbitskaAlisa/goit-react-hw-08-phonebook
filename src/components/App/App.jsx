import Form from "../Form/Form";
import ContactList from "../ContactsList/ContactList";
import { Loader } from "components/Spinner/Spinner";
import Filter from "../Filter/Filter";
import { Container, MainTitle, Title, OpenModalBtn } from './App.styled';
import ModalWindow from "components/Modal/Modal";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";
import { fetchContacts } from "redux/contactsOperations";

function App () {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showModal, setShowModal] = useState(false);  
  const dispatch = useDispatch();                                        

   const toggleModal = () => {
    setShowModal(!showModal)
};

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

  return <Container>
             <MainTitle>Phonebook</MainTitle>
             <OpenModalBtn onClick={toggleModal}>Add</OpenModalBtn>
             <Title>Contacts</Title>
             <Filter />
             {isLoading && !error && <Loader />}
             {error && <p>{error}</p>}
             {!isLoading && !error && <ContactList />}
             {showModal && <ModalWindow onClose={toggleModal}><Form showModal={toggleModal}/></ModalWindow>}
             </Container>
}

export default App;