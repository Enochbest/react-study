function App() {
  let count = 4;
  return (
    <div>
      Hello App
      <br />
      {count > 3 ? <div>Hello3</div> : <div>Hello0</div>}
      {count > 3 && <div>Hello3</div>}
    </div>
  );
}

export default App;
