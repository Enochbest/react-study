import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useState,
} from 'react';

// const MyInput = forwardRef(function MyInput(props, ref) {
//   const inputRef = useRef(null);
//   useImperativeHandle(ref, () => {
//     return {
//       focus() {
//         inputRef.current.focus();
//       },
//     };
//   });
//   return <input type="text" ref={inputRef} />;
// });
//
// function App() {
//   const ref = useRef(null);
//   //副作用：不符合纯函数的规范
//   setTimeout(() => {
//     ref.current.focus();
//   }, 300);
//
//   //副作用：符合纯函数的规范，因为事件是可以处理副作用的
//   const handleClick = () => {
//     ref.current.focus();
//   };
//   //可以在初始的时候进行副总用操作
//   useEffect(() => {
//     ref.current.focus();
//   });
//   return (
//     <div>
//       hello App6
//       <button onClick={handleClick}>点击</button>
//       <MyInput ref={ref}></MyInput>
//     </div>
//   );
// }
function App() {
  let [count, setCount] = useState(0);
  //初始渲染和state更新渲染都会触发useEffect 因为每次渲染JSX后，都会出发useEffect 整个当前函数作用域的最后时机触发，
  useEffect(() => {
    console.log(123);
  });
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);
  console.log('函数执行 了');
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
