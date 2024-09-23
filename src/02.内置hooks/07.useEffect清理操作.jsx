/**
 * useEffect清理操作的重要性
 *  1.当卸载组件或者更新组件的时候可以通过useEffect来实现一些清理操作
 *
 *
 */
import { useState, useEffect } from 'react';
// function Chat({ title }) {
//   useEffect(() => {
//     console.log('进入', title);

//     //1.组件卸载时执行 2.组件更新时清理上一次作用域
//     return () => {
//       console.log('退出', title);
//     };
//   });
//   return <div>Hello Chat {title}</div>;
// }

// function App() {
//   let [show, setShow] = useState(true);
//   let [title, setTitle] = useState('情感聊天室');

//   const handleClick = () => {
//     setShow(!show);
//   };
//   const handleChange = e => {
//     setTitle(e.target.value);
//   };
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>count+1</button>
//       <select value={title} name="" id="" onChange={handleChange}>
//         <option value="情感聊天室">情感聊天室</option>
//         <option value="体育聊天室">体育聊天室</option>
//       </select>
//       <div>{show && <Chat title={title}></Chat>}</div>
//     </div>
//   );
// }

//清理写法
// function fetchChat(title) {
//   const delay = title === '情感聊天室' ? 2000 : 200;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, text: title + 1 },
//         { id: 2, text: title + 2 },
//         { id: 3, text: title + 3 },
//       ]);
//     }, delay);
//   });
// }

// function Chat({ title }) {
//   const [list, setList] = useState([]);
//   useEffect(() => {
//     console.log('进入', title);
//     let ignore = false;
//     fetchChat(title).then(data => {
//       if (!ignore) {
//         setList(data);
//       }
//     });

//     return () => {
//       ignore = true;
//       console.log('退出', title);
//     };
//   }, [title]);
//   return (
//     <div>
//       Hello Chat {title}
//       <ul>
//         {list.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function App() {
//   let [show, setShow] = useState(true);
//   let [title, setTitle] = useState('情感聊天室');

//   const handleClick = () => {
//     setShow(!show);
//   };
//   const handleChange = e => {
//     setTitle(e.target.value);
//   };
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>count+1</button>
//       <select value={title} name="" id="" onChange={handleChange}>
//         <option value="情感聊天室">情感聊天室</option>
//         <option value="体育聊天室">体育聊天室</option>
//       </select>
//       <div>{show && <Chat title={title}></Chat>}</div>
//     </div>
//   );
// }

// await 推荐写法
function fetchChat(title) {
  const delay = title === '情感聊天室' ? 2000 : 200;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: title + 1 },
        { id: 2, text: title + 2 },
        { id: 3, text: title + 3 },
      ]);
    }, delay);
  });
}

function Chat({ title }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    console.log('进入', title);
    let ignore = false;

    async function fetchData() {
      const data = await fetchChat(title);
      if (!ignore) {
        setList(data);
      }
    }

    return () => {
      ignore = true;
      console.log('退出', title);
    };
  }, [title]);
  return (
    <div>
      Hello Chat {title}
      <ul>
        {list.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
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
