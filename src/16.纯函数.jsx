// let count = 1;
// function App() {
//   count++;
//   console.log(count++);
//   //0最终打印得到3 开启严格模式(StrictMode) 会执行两次函数以便开发者观察两次输出结果 来确定组件是不是为纯函数
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       {count}
//     </div>
//   );
// }

// export default App;

//纯函数的特点相同的输入有相同的输出
function foo(n) {
  return n * 2;
}

foo(2);
foo(2);
foo(2);
