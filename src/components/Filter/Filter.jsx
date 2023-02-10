import { setFilter } from 'redux/contacts/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { Text, Input } from '@chakra-ui/react';

const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.target.value));
    }
    return (
        <>
            <Text fontSize="2xl">Find contacts by name</Text>
            <Input fontSize="2xl" size="lg" htmlSize={38} width='auto' variant='flushed' type="text" value={filter} onChange={changeFilter} mb="8" focusBorderColor='pink.400'/>
        </>
    )
}


export default Filter;