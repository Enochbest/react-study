function App() {
  const list = ['aaa', 'bbb', 'ccc'];
  for (let i = 0; i < list.length; i++) {
    list[i] = <li>{list[i]}</li>;
  }
  return (
    <div>
      Hello App
      <ul>{list}</ul>
      <div></div>
    </div>
  );
}

export default App;
