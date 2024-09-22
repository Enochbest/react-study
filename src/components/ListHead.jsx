import { useContext } from 'react';
import { listDispatchContext } from '../provider/ListProvider.jsx';
function ListHead() {
  const dispatch = useContext(listDispatchContext);
  return (
    <>
      <input type="text" />
      <button onClick={() => dispatch({ type: 'add' })}>添加</button>
    </>
  );
}

export default ListHead;
