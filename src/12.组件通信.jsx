//子组件整体接收参数
// function Welcome(props) {
//   return <div>Hello Welcome,{props.msg}</div>;
// }

// function App() {
//   return (
//     <div>
//       Hello App
//       <Welcome count="123" msg="hi" />
//     </div>
//   );
// }
// export default App;

//子组件解构接收参数
// function Welcome({ count, msg, showStatus }) {
//   return (
//     <div>
//       {/* showStatus什么都不传递是一个boole值true */}
//       Hello Welcome,{msg} {count},{showStatus + ''}
//     </div>
//   );
// }

// function App() {
//   const count = 123;
//   const msg = 'hi';
//   return (
//     <div>
//       Hello App
//       <Welcome count={count} msg={msg} showStatus />
//     </div>
//   );
// }
// export default App;

// //组件传递事件
// function Welcome({ onClick, getData }) {
//   getData('子组件的数据');
//   return (
//     <div onClick={() => onClick(123)}>
//       {/* showStatus什么都不传递是一个boole值true */}
//       Hello Welcome
//     </div>
//   );
// }

// function App() {
//   const handleClick = value => {
//     console.log('事件触发了');
//     console.log(value);
//   };
//   const getData = value => {
//     console.log(value, '触发');
//   };
//   return (
//     <div>
//       Hello App
//       <Welcome onClick={handleClick} getData={getData} />
//     </div>
//   );
// }
// export default App;

// 批量传递
function Welcome({ name, age, hobby }) {
  return (
    <div>
      {/* showStatus什么都不传递是一个boole值true */}
      <div>{name}</div>
      <div>{age}</div>
      <div>{hobby}</div>
    </div>
  );
}

function App() {
  const info = {
    name: '张三',
    age: 18,
    hobby: ['篮球'],
  };
  return (
    <div>
      Hello App
      <Welcome {...info} />
    </div>
  );
}
export default App;
