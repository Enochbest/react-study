import { useRef, forwardRef, useImperativeHandle } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      changeStyle() {
        inputRef.current.style.background = 'red';
      },
    };
  });
  return <input type="text" ref={inputRef} />;
});

function App() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
    ref.current.changeStyle();
  };
  return (
    <div>
      hello App6
      <button onClick={handleClick}>点击</button>
      <MyInput ref={ref}></MyInput>
    </div>
  );
}

export default App;
