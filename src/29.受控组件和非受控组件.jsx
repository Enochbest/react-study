/**
 * 1.通过props控制的组件为受控组件,通过state控制的组件为非受控组件
 *
 *
 *
 */

import { useState } from 'react';

//受控组件 React表单内置了受控组件的行为
// function App() {
//   let [value, setValue] = useState(0);
//   //依赖于useState 的属性直接进行计算就可以
//   const handleChange = e => {
//     setValue(e.target.value);
//   };
//   return (
//     <div>
//       {/* App */}
//       Hello App
//       <input type="text" value={value} onChange={handleChange} />
//     </div>
//   );
// }

function App() {
  let [value, setValue] = useState(false);
  //依赖于useState 的属性直接进行计算就可以
  const handleChange = e => {
    setValue(e.target.checked);
  };
  return (
    <div>
      {/* App */}
      Hello App
      <input type="checkbox" checked={value} onChange={handleChange} />
    </div>
  );
}

export default App;
