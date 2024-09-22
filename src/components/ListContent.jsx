import { useContext } from 'react';
import { listDispatchContext, listContext } from '../provider/ListProvider.jsx';
function ListContent() {
  const dispatch = useContext(listDispatchContext);
  const list = useContext(listContext);

  return (
    <>
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              {item.text}
              <button onClick={() => dispatch({ type: 'edit', id: item.id })}>
                编辑
              </button>
              <button onClick={() => dispatch({ type: 'remove', id: item.id })}>
                删除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListContent;
