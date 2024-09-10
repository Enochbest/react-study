// import { useState } from 'react';
// import { cloneDeep } from 'lodash/lang.js';
// function App() {
//   const [list, setList] = useState([
//     { id: 1, text: 'aaa' },
//     { id: 3, text: 'bbb' },
//     { id: 2, text: 'ccc' },
//   ]);
//   const handleClick = () => {
//     // setList([...list, { id: 4, text: 'ddd' }]);
//     // setList([{ id: 4, text: 'ddd' }, ...list]);
//     // setList([...list.slice(1, 0), { id: 4, text: 'ddd' }, ...list.slice(1)]);
//     // setList(
//     //   list.map(item => {
//     //     if (item.id === 3) {
//     //       return { ...item, text: 'ddd' };
//     //     } else {
//     //       return item;
//     //     }
//     //   })
//     // );
//     const cloneList = cloneDeep(list);
//     cloneList.reverse();
//     setList(cloneList);
//   };
//
//   console.log('组件内部更新');
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>count+1</button>
//       list:
//       {list.map(item => (
//         <li key={item.id}>{item.text}</li>
//       ))}
//     </div>
//   );
// }
//
// export default App;

import { useState } from 'react';
function App() {
  const [info, setInfo] = useState({
    name: '张三',
    age: 16,
  });
  const handleClick = () => {
    setInfo({
      ...info,
      age: info.age + 1,
    });
  };

  console.log('组件内部更新');
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      <div>name:{info.name}</div>
      <div>age:{info.age}</div>
    </div>
  );
}

export default App;
