import { useReducer, createContext } from 'react';
export const listContext = createContext();
export const listDispatchContext = createContext();
function listReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, { id: 4, text: 'ddd' }];
    case 'edit':
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, text: 'new' + item.text };
        } else {
          return item;
        }
      });
    case 'remove':
      return state.filter(item => {
        return item.id !== action.id;
      });
  }
}
function ListProvider({ children }) {
  const [list, dispatch] = useReducer(listReducer, [
    { id: 1, text: 'aaa' },
    { id: 2, text: 'bbb' },
    { id: 3, text: 'ccc' },
  ]);
  return (
    <listContext.Provider value={list}>
      <listDispatchContext.Provider value={dispatch}>
        {children}
      </listDispatchContext.Provider>
    </listContext.Provider>
  );
}

export default ListProvider;
