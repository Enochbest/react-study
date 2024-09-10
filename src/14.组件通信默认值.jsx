// function Welcome({ count = 1, age = 0 }) {
//   return (
//     <div>
//       {/* Welcome */}
//       {count}
//       {age}
//       Hello Welcome
//     </div>
//   );
// }
function Welcome({ count, age }) {
  return (
    <div>
      {/* Welcome */}
      {count}
      {age}
      Hello Welcome
    </div>
  );
}
Welcome.defaultProps = {
  count: 1,
  age: 0,
};
function App() {
  const count = 123;
  const age = 18;
  return (
    <div>
      {/* App */}
      Hello App
      <Welcome count={count} age={age}></Welcome>
      <Welcome></Welcome>
    </div>
  );
}

export default App;
