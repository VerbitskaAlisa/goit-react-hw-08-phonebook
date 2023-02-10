import { Box, Link, Center, Divider } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';

const setActive = ({isActive}) => ({borderBottom: isActive ? "2px solid #B83280" : "none"});

export default function AuthNav () {
    
    return (
        <Box display="flex" alignItems="center">
        <Link as={NavLink} to="login" fontSize="3xl" style={setActive} _hover={{borderBottom: "none"}}>Sign In</Link>
        <Center height='50px' ml="2" mr="2">
          <Divider orientation='vertical' />
         </Center>
        <Link as={NavLink} to="register" fontSize="3xl" style={setActive} _hover={{borderBottom: "none"}}>Register</Link>
   </Box>
    )
}