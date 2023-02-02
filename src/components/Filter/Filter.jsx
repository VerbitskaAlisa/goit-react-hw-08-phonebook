import { setFilter } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const changeFilter = e => {
        dispatch(setFilter(e.target.value));
    }
    return (
        <Label>
            Find contacts by name
            <Input type="text" value={filter} onChange={changeFilter} />
        </Label>
    )
}


export default Filter;