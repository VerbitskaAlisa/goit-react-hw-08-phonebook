import { IoExitOutline } from 'react-icons/io5';
import { IconButton, Text, Flex } from '@chakra-ui/react';
import { useAuth } from 'redux/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

export default function UserMenu () {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutClick = () => {
        dispatch(logOut())
        navigate('/', {replace: true})
    }
    
    return (
       <Flex alignItems="center">
        <Text fontSize="3xl" mr="4">Hi there, {user.name}!</Text>
        <IconButton onClick={logOutClick} colorScheme='pink'  aria-label='ExitBtn' size='lg' icon={<IoExitOutline />} />
       </Flex>
    )
}