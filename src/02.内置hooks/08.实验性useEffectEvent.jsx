/**
 * 实验性的:useEffect
 * 使用一个特殊的hook调用useEffectEvent 来从你的effect中提取非反应性逻辑
 * 没啥用 完全可以通过多个useEffect 对应多个state来实现
 */
import { useState, useEffect } from 'react';
function Chat({ title }) {
  useEffect(() => {
    console.log('进入', title);

    //1.组件卸载时执行 2.组件更新时清理上一次作用域
    return () => {
      console.log('退出', title);
    };
  }, [title]);
  return <div>Hello Chat {title}</div>;
}

function App() {
  let [show, setShow] = useState(true);
  let [title, setTitle] = useState('情感聊天室');

  const handleClick = () => {
    setShow(!show);
  };
  const handleChange = e => {
    setTitle(e.target.value);
  };
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      <select value={title} name="" id="" onChange={handleChange}>
        <option value="情感聊天室">情感聊天室</option>
        <option value="体育聊天室">体育聊天室</option>
      </select>
      <div>{show && <Chat title={title}></Chat>}</div>
    </div>
  );
}

export default App;
