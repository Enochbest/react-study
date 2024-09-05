import './assets/04.全局样式.css';
import style from './assets/05.局部样式.module.css';
function App() {
  return (
    <div className="box">
      Hello App
      <div className={style.headTitle}>head</div>
      <div className={style.box2}>局部样式</div>
    </div>
  );
}
export default App;
