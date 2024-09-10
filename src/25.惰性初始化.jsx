import { useState } from 'react';

function computed(n) {
  return n + 1 + 2 + 3;
}
function App() {
  // let [count, setCount] = useState(computed(0)); // 这种写法每次页面渲染都会调用computed方法
  let [count, setCount] = useState(() => computed(0)); // 回调函数的方式确保在初始化值的时候computed只调用一次

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);
  console.log('函数执行 了');
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
