import { useState } from 'react';
function App() {
  const [list, setList] = useState([
    { id: 1, text: 'aaa' },
    { id: 3, text: 'bbb' },
    { id: 2, text: 'ccc' },
  ]);
  const handleClick = () => {
    // list.push({ id: 4, text: 'ddd' });
    // setList(list); //直接对list进行了修改--》错误的做法-》X
    setList([...list, { id: 4, text: 'ddd' }]);
  };
  console.log('组件内部更新');
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      list:
      {list.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
}

export default App;

// import { useState } from 'react';
// function App() {
//   let [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(1); //当修改状态的值没有发生改变的时候，函数组件并不会渲染
//   };
//   console.log('组件内部更 新');
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>count+1</button>
//       count {count}
//     </div>
//   );
// }
//
// export default App;
