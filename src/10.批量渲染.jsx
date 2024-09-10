// function App() {
//   const list = ['aaa', 'bbb', 'ccc'];
//   for (let i = 0; i < list.length; i++) {
//     list[i] = <li>{list[i]}</li>;
//   }
//   return (
//     <div>
//       Hello App
//       <ul>{list}</ul>
//     </div>
//   );
// }

function App() {
  const list = ['aaa', 'bbb', 'ccc'];

  return (
    <div>
      Hello App
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
