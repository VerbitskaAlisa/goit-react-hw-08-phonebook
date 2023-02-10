import { Box, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const setActive = ({isActive}) => ({borderBottom: isActive ? "2px solid #B83280" : "none"});

export default function Navigation () {
    return (
        <Box as="nav">
                    <Link as={NavLink} to="/home" mr="4" fontSize="3xl" style={setActive} _hover={{borderBottom: "none"}}>Home</Link>
                    <Link as={NavLink} to="/contacts" mr="4" fontSize="3xl" style={setActive} _hover={{borderBottom: "none"}}>Contacts</Link>
                </Box>
    )
}