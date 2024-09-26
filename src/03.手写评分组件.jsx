import { useState } from 'react';
import { QfRate } from './QfAntd';
import { Rate } from 'antd';

function App() {
  const [value1, setValue1] = useState(3);
  const [value2, setValue2] = useState(2);
  const [value3, setValue3] = useState(3);
  const [value4, setValue4] = useState(2);
  return (
    <div>
      <Rate count={6} value={value1} onChange={setValue1}></Rate> {value1}
      <br />
      <Rate value={value2} onChange={setValue2}></Rate>
      {value2}
      <br />
      <QfRate count={6} value={value3} onChange={setValue3}></QfRate> {value3}
      <br />
      {/* <QfRate value={value4} onChange={setValue4}></QfRate> */}
      {value4}
      <br />
    </div>
  );
}
export default App;
