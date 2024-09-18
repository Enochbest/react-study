// import { useState } from 'react';
//
// function Counter() {
//   const [count, setCount] = useState(0);
//   const handClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button onClick={handClick}>计数：{count}</button>
//     </div>
//   );
// }
// function App() {
//   const [show, setShow] = useState(true);
//   //直接切换count组件的计数会丢失因为组件进行了重新渲染
//   const handleClick = () => {
//     setShow(!show);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>切换</button>
//       {show && <Counter />}
//     </div>
//   );
// }
//
// export default App;

import { useState } from 'react';

function Counter({ style }) {
  const [count, setCount] = useState(0);
  const handClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button style={style} onClick={handClick}>
        计数：{count}
      </button>
    </div>
  );
}
function App() {
  const [style, setStyle] = useState(true);
  //直接切换count组件的计数会丢失因为组件进行了重新渲染
  const handleClick = () => {
    setStyle(!style);
  };
  return (
    <div>
      <button onClick={handleClick}>切 换</button>
      {/*  计数的状态会被保留，因为组件的层级是一样的*/}
      {/*{style ? <Counter style={{ border: '1px red solid' }} /> : <Counter />}*/}
      {/*  计数的状态不会被保留，因为组件的层级不样的*/}
      {/*{style ? (*/}
      {/*  <Counter style={{ border: '1px red solid' }} />*/}
      {/*) : (*/}
      {/*  <div>*/}
      {/*    <Counter />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*  计数的状态不会被保留，因为组件key不一样的*/}
      {style ? (
        <Counter style={{ border: '1px red solid' }} key="con1" />
      ) : (
        <Counter key="con2" />
      )}
      {/*   总结：因为底层diff算法是同级比较，有限比较key，可key相同，则认为是同一组件，状态保留，key不同则直接更新，如果没有key 同一级组件状态保留，不同级组件则状态不保留*/}
    </div>
  );
}

export default App;
