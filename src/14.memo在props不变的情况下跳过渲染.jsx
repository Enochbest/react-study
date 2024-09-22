import { useState, memo } from 'react';
//默认值

function App() {
  const [count, setCount] = useState(0);
  const handClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      Hello App
      <button onClick={handClick}>点击</button>
      count{count}
      {/*  即使Head组件没有依赖于count 还是会重新渲染，理想情况下只需去重新渲染App组件其他内容*/}
      <Head></Head>
    </div>
  );
}

const Head = memo(function Head() {
  return (
    <div>
      Hello Head
      {Math.random()}
    </div>
  );
});
export default App;
