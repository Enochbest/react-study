import { useState } from 'react';
function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    // console.log(count); //打印为0 页面实际渲染为1
    setTimeout(() => {
      console.log(count); // 还是0
    }, 500);
  };
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
