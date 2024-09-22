import { useState, memo, useCallback } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('hello react');
  // const list = [msg.toLocaleLowerCase()];

  //只有依赖项msg 发生更新,list 才会更新,被认为是不同的值,count值改变对list就不受影响了
  //如果是函数的话则使用useCallback
  const fn = useCallback(() => {
    console.log(msg);
  }, [msg]);
  const handClick = () => {
    setCount(count + 1);
    setMsg('hello react1');
  };
  return (
    <div>
      Hello App
      <button onClick={handClick}>点击</button>
      count{count}
      {/*  普通类型的值传入在App组件跟新的时候 HeadProps没有变化，不会重新渲染*/}
      {/*<Head list={13}></Head>*/}
      {/*  引用类型的值作为props传递,在App组件每次渲染后,新旧两个值实际上是不同的地址 Object.is() 方法会认为两个值为不同值,Head组件还是会进行更新*/}
      <Head fn={fn}></Head>
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
