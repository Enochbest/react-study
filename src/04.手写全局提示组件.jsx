import { message } from 'antd';
import { qfMessage } from './QfAntd';
function App() {
  const handleClick1 = () => {
    message.info({
      content: 'hello',
      duration: 30,
    });
  };
  const handleClick2 = () => {
    message.error('error');
  };

  const handleClick3 = () => {
    qfMessage.info('info');
  };
  const handleClick4 = () => {
    qfMessage.success('success');
  };
  return (
    <div>
      Hello App
      <button onClick={handleClick1}>点击1</button>
      <button onClick={handleClick2}>点击2</button>
      <br />
      <button onClick={handleClick3}>点击3</button>
      <button onClick={handleClick4}>点击4</button>
    </div>
  );
}
export default App;
