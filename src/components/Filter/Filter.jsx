import { useDispatch } from 'react-redux';
import { filterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const onInput = e => {
    dispatch(filterValue(e.target.value));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onInput={onInput} />
    </div>
  );
};
