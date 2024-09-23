// import { useState, useRef } from 'react';

// function App() {
//   let [count, setCount] = useState(0);
//   const num = useRef(0);
//   const handleClick = () => {
//     setCount(count + 1);
//     num.current++;
//     console.log(num.current);
//   };

//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>count+1</button>
//       count {count} {num.current}
//     </div>
//   );
// }

// export default App;

//useRef 应用

import { useState, useRef } from 'react';

function App() {
  let [count, setCount] = useState(0);
  //组件更新清除同一定时器防止出现定时器累加的情况
  const num = useRef(null);

  //下面的写法组件更新会创建新的定时器 clearInterval 清除的只是当前作用域下的定时器
  // const num = null;

  const handleClick = () => {
    setCount(count + 1);
    clearInterval(num.current);
    num.current = setInterval(() => {
      console.log('定时器执行了');
    }, 1000);
  };

  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      count {count} {num.current}
    </div>
  );
}

export default App;
