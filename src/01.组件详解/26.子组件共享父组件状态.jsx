import { useState } from 'react';

function Button({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>点击</button>
      {count}
    </div>
  );
}

function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);
  console.log('函数执行 了');
  return (
    <div>
      {/* App */}
      Hello App
      <Button onClick={handleClick} count={count}></Button>
      <Button onClick={handleClick} count={count}></Button>
    </div>
  );
}

export default App;
