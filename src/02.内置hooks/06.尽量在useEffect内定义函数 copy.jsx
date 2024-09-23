/**
 * 尽量在useEffect内定义函数
 *  1.因为函数也可能成为计算变量,所以也要作为依赖项
 *  2.虽然利用依赖项加useCallback来解决问题,当时非常的不方便,最好的解决方案是把杉树定义在useEffect内部
 *
 */
import { useEffect, useState, useCallback } from 'react';

// function App() {
//   let [count, setCount] = useState(0);
//   const foo = useCallback(() => {
//     console.log(count);
//   }, [count]);
//   useEffect(() => {
//     foo();
//   }, [foo]);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>count+1</button>
//       count {count}
//     </div>
//   );
// }

function App() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const foo = () => {
      console.log(count);
    };
    foo();
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      count {count}
    </div>
  );
}
export default App;
