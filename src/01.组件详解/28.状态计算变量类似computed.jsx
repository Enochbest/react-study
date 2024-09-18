import { useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  //依赖于useState 的属性直接进行计算就可以
  let doubleCount = count * 2;
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      count {count} {doubleCount}
    </div>
  );
}

export default App;
