//对象写法;
// const Qf = {
//   Welcome() {
//     return <div>Hello Welcome</div>;
//   },
// };

// //可以解构
// const { Welcome } = Qf;

// function App() {
//   return (
//     <div>
//       Hello App
//       <Qf.Welcome />
//       <Welcome />
//     </div>
//   );
// }

// export default App;

//函数写法
function Qf() {
  return <div>Hello Qf</div>;
}

Qf.Welcome = () => {
  return <div>Hello QfWelcome</div>;
};

function App() {
  return (
    <div>
      Hello App
      <Qf />
      {/* <Qf.Welcome /> */}
    </div>
  );
}

export default App;
