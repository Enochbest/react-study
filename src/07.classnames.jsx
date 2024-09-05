import classNames from 'classnames';
import style from './assets/05.局部样式.module.css';

function App() {
  // const myClass = ['box1', 'box2'];
  const myClass = classNames({
    box1: true,
    box2: true,
    [style.headTitle]: true,
  });
  return (
    // <div className={myClass.join(' ')}>Classnames</div>
    <div className={myClass}>classname</div>
  );
}
export default App;
