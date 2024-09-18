import { useState } from 'react';
import { useImmer } from 'use-immer';
// import classNames from 'classnames';
function TaskList({ title, list, handleChecked }) {
  return (
    <>
      {title}

      <ul>
        {list.map(item => {
          return (
            <li
              key={item.id}
              style={
                !item.checked
                  ? { textDecoration: 'none' }
                  : { textDecoration: 'line-through' }
              }
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={e => handleChecked(e, item)}
              />
              {item.value}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function App() {
  let [msg, setMsg] = useState('');
  let [taskList, setTaskList] = useImmer([]);
  const unCompleteList = taskList.filter(item => !item.checked);
  const completeList = taskList.filter(item => item.checked);
  const handleChange = e => {
    setMsg(e.target.value);
  };

  const addTask = () => {
    setTaskList(draft => {
      draft.unshift({ id: taskList.length, value: msg, checked: false });
    });
    setMsg('');
  };
  const handleChecked = (e, checkedItem) => {
    setTaskList(draft => {
      draft.forEach(item => {
        if (item.id === checkedItem.id) {
          item.checked = e.target.checked;
        }
      });
    });
  };
  return (
    <div>
      {/* App */}
      Hello App
      <div>
        <input type="text" value={msg} onChange={handleChange} />
        <button onClick={addTask}>添加任务</button>
      </div>
      <div>
        <TaskList
          title={<h2>未完成的任务:{unCompleteList.length}个</h2>}
          list={unCompleteList}
          handleChecked={handleChecked}
        />
        <TaskList
          title={<h2>已完成的任务:{completeList.length}个</h2>}
          list={completeList}
          handleChecked={handleChecked}
        />
      </div>
    </div>
  );
}

export default App;
