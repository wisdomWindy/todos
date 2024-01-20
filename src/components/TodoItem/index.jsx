import { useCallback } from 'react';
import classes from './index.module.css';
import {Input,Button,Tag} from 'antd';
import { useSelector } from 'react-redux';


const TodoItem = (props)=>{
  const {
    data,
    onSelect,
    onDelete
  } = props;
  const status = useSelector(state => state.todos.status);
  const colorMap = {
    1:'error',
    3:'success',
    2:'processing'
  }
  const handleChange = (e) => {
    onSelect({ ...data, status: e.target.checked ? "completed" : "undo" });
  };
  return (
    <div className={classes["todo-item"]}>
      <div className={classes["todo-item-checkbox"]}>
        <Input
          type="checkbox"
          checked={data.status === "completed"}
          onChange={handleChange}
          className={classes["checkbox-input"]}
        />
        <div className={`${classes["content"]}`}>
          <div
            className={`${classes["content-text"]} ${
              classes["content--" + data.status]
            }`}
          >
            {data.name}
          </div>
          <Tag color={colorMap[data.status]}>{status.find(item => item.id === data.status).name}</Tag>
        </div>
      </div>
      <div className="actions">
        <Button
          danger={true}
          className={classes["btn"]}
          onClick={() => onDelete(data)}
        >
          删除
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;