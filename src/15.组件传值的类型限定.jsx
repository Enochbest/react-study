import PropTypes from 'prop-types';
function Welcome({ count, age }) {
  return (
    <div>
      {/* Welcome */}
      {count}
      {age}
      Hello Welcome
    </div>
  );
}
Welcome.propTypes = {
  //限定 多个类型
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //限定类型
  age: PropTypes.string,
  //限定具体值
  type: PropTypes.oneOf(['parimary']),
  //限定jsx类型
  icon: PropTypes.element,
};
function App() {
  const count = 123;
  const age = '18';
  return (
    <div>
      {/* App */}
      Hello App
      <Welcome
        count={count}
        age={age}
        type="parimary"
        icon={<div className="icon-close">×</div>}
      ></Welcome>
    </div>
  );
}

export default App;
