import { useState, startTransition } from 'react';

/**
 * React 18之前，渲染一个单一的，不间断的，同步的事务，一旦渲染开始，就不能被中断
 *
 * React18引入并发模式，它允许你将标记更新作为一个transitions，这会告诉react他们可以被中断执行这样可以把紧急的任务先更新，不紧急的任务后更新
 * */

function List({ query }) {
  const items = [];
  const word = 'hello world';
  if (query !== '' && word.includes(query)) {
    const arr = word.split(query);
    for (let i = 0; i < 20000; i++) {
      items.push(
        <li key={i}>
          {arr[0]} <span style={{ color: 'red' }}>{query}</span>
          {arr[1]}{' '}
        </li>
      );
    }
  } else {
    for (let i = 0; i < 20000; i++) {
      items.push(<li key={i}>{word}</li>);
    }
  }
  return <ul>{items}</ul>;
}
function App() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const handleChange = e => {
    //这样训话会阻塞输入框的显示,因为必须先等循环结束才能进行渲染
    // //紧急
    // setSearch(e.target.value);
    // //非紧急
    // setQuery(e.target.value);

    //输入框先进行渲染,列表后续渲染
    // 紧急
    setSearch(e.target.value);
    startTransition(() => {
      //非紧急
      setQuery(e.target.value);
    });
  };
  return (
    <div>
      hello
      <input type="text" value={search} onChange={handleChange} />
      <List query={query}></List>
    </div>
  );
}
export default App;
