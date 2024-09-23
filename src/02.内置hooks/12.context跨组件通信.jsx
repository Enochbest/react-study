import { createContext, useContext } from 'react';
//默认值
const Context = createContext(0);

function App() {
  return (
    <div>
      Hello App
      <Context.Provider value={123}>
        <Head></Head>
      </Context.Provider>
    </div>
  );
}
function Title() {
  const value = useContext(Context);
  return <div>Hello Title{value}</div>;
}

function Head() {
  return (
    <div>
      Hello Head
      <Title></Title>
    </div>
  );
}
export default App;
