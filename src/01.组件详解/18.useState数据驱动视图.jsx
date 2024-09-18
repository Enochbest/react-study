import { useState } from 'react';
function App() {
  let [count, setCount] = useState(0); //是有记忆功能的
  const handleClick = () => {
    //每次调用setCount方法的时候会重新执行函数
    setCount(count + 1); // 状态更新会重新渲染页面
    // setCount(0); //如果设置相同状态 ，则页面不会重新渲染
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
