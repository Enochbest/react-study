import { useEffect, useState } from 'react';

function App() {
  let [count, setCount] = useState(0);
  let [msg, setMsg] = useState('hello');
  let doubleCount = count * 2;
  //指定依赖 初始的时候所有的useEffect 都会触发,更新的时候资源所指定的依赖项才会触发
  //内部是通过Object.is() 来判定是否改变
  useEffect(() => {
    console.log(count);
  }, [count]);
  useEffect(() => {
    console.log(msg);
  }, [msg]);

  //指定为空数组,则在初始化的时候才会触发
  useEffect(() => {
    console.log('不指定,空数组');
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };

  //错误写法 不符合规范
  // useEffect(() => {
  //   console.log(count);
  // }, []);

  //props,state computed 计算变量也需要写依赖
  useEffect(() => {
    console.log(doubleCount);
  }, [doubleCount]);
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
