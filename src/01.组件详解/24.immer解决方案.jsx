import { useImmer } from 'use-immer';
function App() {
  const [list, setList] = useImmer([
    { id: 1, text: 'aaa' },
    { id: 3, text: 'bbb' },
    { id: 2, text: 'ccc' },
  ]);
  const handleClick = () => {
    //可直接修改draft代理对象,重新渲染页面
    setList(draft => {
      draft.push({ id: 4, text: 'ddd' });
    });
  };

  console.log('组件内部更新');
  return (
    <div>
      {/* App */}
      Hello App
      <button onClick={handleClick}>count+1</button>
      list:
      {list.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  );
}

export default App;
