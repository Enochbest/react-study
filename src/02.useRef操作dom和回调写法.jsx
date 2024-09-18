// import { useRef } from 'react';

// function App() {
//   const myRef = useRef(null);

//   const handleClick = () => {
//     //通过useRef操作dom
//     console.log(myRef.current.innerHTML);
//     myRef.current.style.background = 'red';
//   };

//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <button onClick={handleClick}>点击</button>
//       <div ref={myRef}>Hello</div>
//     </div>
//   );
// }

function App() {
  const list = [
    {
      id: 1,
      value: 'aaa',
    },
    {
      id: 2,
      value: 'bbb',
    },
    {
      id: 3,
      value: 'ccc',
    },
  ];

  return (
    <div>
      {/* App */}
      Hello App
      <ul>
        {/* 不是规范写法 */}
        {/* {list.map(item => {
          const myRef = useRef(null);
          return (
            <li key={item.id} ref={myRef}>
              {item.value}
            </li>
          );
        })} */}

        {/* 在逻辑当中操作dom推荐写法 */}
        {list.map(item => {
          return (
            <li
              key={item.id}
              ref={myRef => {
                myRef.style.background = 'red';
              }}
            >
              {item.value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
