import { useState } from 'react';
function App() {
  let [count, setCount] = useState(0);
  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1); // 调用三次，只重新渲染一次App组件
    // console.log(count, '函数执行 了');

    // value 是上一次计算完的结果所以，点击后会直接打印3， 如果想在更新后的数据上再次更新数据可以用此写法
    setCount(value => {
      console.log(value, '------value---------');
      return value + 1;
    });
    setCount(value => {
      console.log(value, '------value---------');
      return value + 1;
    });
    setCount(value => {
      console.log(value, '------value---------');
      return value + 1;
    });
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
