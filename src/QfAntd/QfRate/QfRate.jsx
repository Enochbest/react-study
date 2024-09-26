import './QfRate.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
function QfRate({ count = 5, value = 0, onChange = () => {} }) {
  const [mouseValue, setMouseValue] = useState(value);
  const stars = [];
  console.log('组件渲染 了');
  const hanleMouseEnter = index => {
    console.log(index);
    setMouseValue(index + 1);
  };
  const handleMouseLeave = () => {
    setMouseValue(value);
  };
  const handleClick = index => {
    onChange(index + 1);
  };

  for (let index = 0; index < count; index++) {
    const rateClass = classNames({
      'qf-ant-rate-star': true,
      'qf-ant-rate-star-active': mouseValue > index,
    });
    stars.push(
      <li
        key={index}
        className={rateClass}
        onMouseEnter={() => hanleMouseEnter(index)}
        onClick={() => handleClick(index)}
      ></li>
    );
  }
  return (
    <ul className="qf-ant-rate" onMouseLeave={handleMouseLeave}>
      {stars}
    </ul>
  );
}
QfRate.propTypes = {
  count: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};
export default QfRate;
