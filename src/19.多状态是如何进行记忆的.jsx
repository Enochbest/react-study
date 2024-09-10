import { useState } from 'react';
function App() {
  let [count, setCount] = useState(0);
  let [count3] = useState(0);

  const handleClick = () => {
    setCount(count3 + 1);
  };
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      count {count}
      count3 {count3}
    </div>
  );
}

export default App;
