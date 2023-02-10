import { Link, Text } from "@chakra-ui/react";
import { PhoneIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

export default function Logo () {  
    return (
        <Link as={NavLink} to="/"  display="flex" alignItems="center" backgroundColor="pink.500" pt="4" pb="4" pr="6" pl="6" borderRadius="50" boxShadow="base" _hover={{borderBottom: "none"}}>
                   <PhoneIcon w="8" h="8" marginRight="2" color="white"/>
                   <Text fontSize="3xl" color="white">
                       Phonebook
                   </Text>
                </Link>
    )
}