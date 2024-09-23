/**
 * 18.useTransition和useDeferedValue
 *
 * useTransition 是一个让你在 不阻塞ui的情况下来更新状态的ReactHook,返回一个状态值表示过度任务的等待状态,以及一个启动该过度任务的函数
 *
 *
 * useDeferedValue 接受一个值,并且返回该值的新副本,该副本将推迟到紧急更新之后更新
 *
 *
 */

// import { useState, useTransition } from 'react';

// function List({ query }) {
//   const items = [];
//   const word = 'hello world';
//   if (query !== '' && word.includes(query)) {
//     const arr = word.split(query);
//     for (let i = 0; i < 20000; i++) {
//       items.push(
//         <li key={i}>
//           {arr[0]} <span style={{ color: 'red' }}>{query}</span>
//           {arr[1]}{' '}
//         </li>
//       );
//     }
//   } else {
//     for (let i = 0; i < 20000; i++) {
//       items.push(<li key={i}>{word}</li>);
//     }
//   }
//   return <ul>{items}</ul>;
// }
// function App() {
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');
//   const [pending, startTransition] = useTransition();
//   const handleChange = e => {
//     //这样训话会阻塞输入框的显示,因为必须先等循环结束才能进行渲染
//     // //紧急
//     // setSearch(e.target.value);
//     // //非紧急
//     // setQuery(e.target.value);

//     //输入框先进行渲染,列表后续渲染
//     // 紧急
//     setSearch(e.target.value);
//     startTransition(() => {
//       //非紧急
//       setQuery(e.target.value);
//     });
//   };
//   return (
//     <div>
//       hello
//       <input type="text" value={search} onChange={handleChange} />
//       <div>{pending && <div>Loading...</div>}</div>
//       <List query={query}></List>
//     </div>
//   );
// }
// export default App;

import { useState, useDeferredValue } from 'react';

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
  //得到对应search 一样的值,只不过是一个延迟的副本
  const [query] = useDeferredValue(search);
  const handleChange = e => {
    setSearch(e.target.value);
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
