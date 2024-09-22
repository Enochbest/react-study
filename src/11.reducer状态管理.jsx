// import { useState } from 'react';
//
// function App() {
//   const [list, setList] = useState([
//     { id: 1, text: 'aaa' },
//     { id: 2, text: 'bbb' },
//     { id: 3, text: 'ccc' },
//   ]);
//   const handleAdd = () => {
//     setList([...list, { id: 4, text: 'ddd' }]);
//   };
//   const handleEdit = id => {
//     setList(
//       list.map(item => {
//         if (item.id === id) {
//           return { ...item, text: 'new' + item.text };
//         } else {
//           return item;
//         }
//       })
//     );
//   };
//   const handleDelete = id => {
//     setList(
//       list.filter(item => {
//         return item.id !== id;
//       })
//     );
//   };
//   return (
//     <div>
//       hello App
//       <input type="text" />
//       <button onClick={() => handleAdd()}>添加</button>
//       <ul>
//         {list.map(item => {
//           return (
//             <li key={item.id}>
//               {item.text}
//               <button onClick={() => handleEdit(item.id)}>编辑</button>
//               <button onClick={() => handleDelete(item.id)}>删除</button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
//
// export default App;

// import { useReducer } from 'react';
//
// function listReducer(state, action) {
//   switch (action.type) {
//     case 'add':
//       return [...state, { id: 4, text: 'ddd' }];
//     case 'edit':
//       return state.map(item => {
//         if (item.id === action.id) {
//           return { ...item, text: 'new' + item.text };
//         } else {
//           return item;
//         }
//       });
//     case 'remove':
//       return state.filter(item => {
//         return item.id !== action.id;
//       });
//   }
// }
//
// function App() {
//   const [list, dispatch] = useReducer(listReducer, [
//     { id: 1, text: 'aaa' },
//     { id: 2, text: 'bbb' },
//     { id: 3, text: 'ccc' },
//   ]);
//   return (
//     <div>
//       hello App
//       <input type="text" />
//       <button onClick={() => dispatch({ type: 'add' })}>添加</button>
//       <ul>
//         {list.map(item => {
//           return (
//             <li key={item.id}>
//               {item.text}
//               <button onClick={() => dispatch({ type: 'edit', id: item.id })}>
//                 编辑
//               </button>
//               <button onClick={() => dispatch({ type: 'remove', id: item.id })}>
//                 删除
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
//
// export default App;

import { useImmerReducer } from 'use-immer';

function listReducer(draft, action) {
  switch (action.type) {
    case 'add':
      draft.push({ id: 4, text: 'ddd' });
      break;
    case 'edit': {
      let value = draft.find(item => item.id === action.id);
      value.text = 'new' + value.text;
      break;
    }
    case 'remove': {
      const index = draft.findIndex(item => item.id === action.id);
      draft.splice(index, 1);
      break;
    }
  }
}

function App() {
  const [list, dispatch] = useImmerReducer(listReducer, [
    { id: 1, text: 'aaa' },
    { id: 2, text: 'bbb' },
    { id: 3, text: 'ccc' },
  ]);
  return (
    <div>
      hello App
      <input type="text" />
      <button onClick={() => dispatch({ type: 'add' })}>添加</button>
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
    </div>
  );
}

export default App;
