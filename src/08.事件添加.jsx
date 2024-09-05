const App = () => {
  const handleClick = () => {
    console.log('1233');
  };
  const handleMouseEnter = e => {
    console.log(e);
  };
  const handleClick2 = num => {
    return e => {
      console.log(e);
      console.log(num);
    };
  };
  const handleClick3 = (num, e) => {
    console.log(e);
    console.log(num);
  };
  return (
    <div>
      Hello
      <div>
        <button onClick={handleClick} onMouseEnter={handleMouseEnter}>
          点击
        </button>
        <button onClick={handleClick2(123)}>点击传参2</button>
        {/*推荐第二种*/}
        <button onClick={e => handleClick3(1234, e)}>点击传参3</button>
      </div>
    </div>
  );
};

export default App;
