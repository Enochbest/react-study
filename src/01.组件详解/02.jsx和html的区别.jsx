function App() {
  const userName = 'Tome';
  const myDiv = <div>666</div>;
  // const user = {
  //   age: 18,
  // };
  // const fn = () => {};
  return (
    <div>
      Hello App
      <input type="text" id="elem" onClick={() => {}} />
      <div>{1 + 1}</div>
      <div title={userName}>{userName}</div>
      {/*<div>{user}</div>*/}
      {/*<div>{fn()}</div>*/}
      <div>{myDiv}</div>
    </div>
  );
}
export default App;
