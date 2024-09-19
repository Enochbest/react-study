/**
 * useEffect清理操作的重要性
 *  1.当卸载组件或者更新组件的时候可以通过useEffect来实现一些清理操作
 *
 *
 */
import { useState, useEffect } from 'react';
function Chat({ title }) {
  useEffect(() => {
    console.log('进入');
    return () => {
      console.log('退出');
    };
  });
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
