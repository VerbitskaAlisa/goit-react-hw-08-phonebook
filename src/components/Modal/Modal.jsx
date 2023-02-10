import { Modal, ModalOverlay, ModalContent } from "@chakra-ui/react";
import AddContactForm from "components/AddContactForm/AddContactForm";
export default function ModalWindow ({isOpen, onClose}) {
    
    return (
        <>
        <Modal
        closeOnOverlayClick={true}
        isCentered
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='scale'
      >
        <ModalOverlay />
        <ModalContent p="8">
        <AddContactForm onClose={onClose}/>
        </ModalContent>
      </Modal>
      </>
    )
}

