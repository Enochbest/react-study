import { useEffect, useLayoutEffect, useInsertionEffect, useRef } from 'react';

function App() {
  const ref = useRef(null);
  useEffect(() => {
    console.log(ref.current, 1);
  });
  useLayoutEffect(() => {
    console.log(ref.current, 2);
  });
  useInsertionEffect(() => {
    console.log(ref.current, 3); //null 3 在这个钩子里获取不到元素
  });
  return (
    <div>
      hello App
      <div ref={ref}>aaa</div>
    </div>
  );
}

export default App;
