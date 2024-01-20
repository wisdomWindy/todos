import classes from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Todos from './components/Todos'
import { setTodos } from './store/reducers/todos';
import { useEffect, useState } from 'react';
import AddInput from './components/AddInput';
import { message as Message } from 'antd';
import AddItem from './components/AddItem';
function App() {
  const todos = useSelector(state => state.todos.todos);
  const [filtered, setFiltered] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setFiltered(todos);
  }, []);
  // 标记完成
  const handleSelect = (dataItem, index) => {
    const newTodos = todos.map(item => {
      if (item.id === dataItem.id) {
        return dataItem;
      } else {
        return item;
      }
    });
    dispatch(setTodos(newTodos));
    setFiltered(newTodos);
  };
  // 添加，显示弹窗
  const addHandler = (value) => {
    setShowModal(true);
  }
  // 确认添加
  const onConfirmAdd = (value) => {
    let newData = {
      id: (todos.length + 1) + '',
      name: value.name,
      status: value.status
    }
    dispatch(setTodos([...todos, newData]));
    setFiltered([...filtered, newData]);
    setShowModal(false);
  }
  // 取消添加
  const onCancel = ()=>{
    setShowModal(false);
  }
  // 搜索
  const onSearch = (value) => {
    setFiltered(todos.filter(item => item.name.includes(value)))
  }

  // 删除
  const onDelete = (value) => {
    dispatch(setTodos(todos.filter(item => item.id !== value.id)));
    setFiltered(filtered.filter(item => item.id !== value.id));
  }
  return (
    <div className={classes['App']}>
      <header className={classes['header']}>Todos</header>
      <AddInput onAdd={addHandler} onSearch={onSearch}></AddInput>
      <div className={classes['main']}>
        <Todos data={filtered} onSelect={handleSelect} onDelete={onDelete}></Todos>
      </div>
      <AddItem show={showModal} onAdd={onConfirmAdd} onCancel={onCancel}></AddItem>
    </div>
  );
}

export default App;
