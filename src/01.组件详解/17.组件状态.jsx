import { useState } from 'react';
function App() {
  let [count, setCount] = useState(0);
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
