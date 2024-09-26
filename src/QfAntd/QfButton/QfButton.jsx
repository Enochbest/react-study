import './QfButton.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function QfButton({
  children,
  type = 'defalut',
  danger = false,
  size = 'middle',
  icon = null,
}) {
  const btnClass = classNames({
    'qf-ant-btn': true,
    [`qf-ant-btn-${type}`]: true,
    'qf-ant-btn-dangerous': danger,
    'qf-ant-btn-sm': size === 'small',
    'qf-ant-btn-lg': size === 'large',
  });
  return (
    <button className={btnClass}>
      {icon && <span className="qf-ant-btn-icon">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

//这种写法已经被弃用 控制台会有警告
// QfButton.defaultProps = {
//   type: 'defalut',
//   danger: false,
//   size: 'middle',
// };
QfButton.propTypes = {
  type: PropTypes.string,
  danger: PropTypes.bool,
  size: PropTypes.oneOf(['middle', 'small', 'large']),
  icon: PropTypes.element,
};

export default QfButton;
