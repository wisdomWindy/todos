import classes from "./index.module.css";
import TodoItem from "../TodoItem";
const Todos = (props) => {
  const { onSelect,onDelete,data } = props;
  return (
    <div className={classes["todo"]}>
      {!data.length ? <div className={classes['no-data']}> 暂无数据</div> :data.map((item, index) => (
        <TodoItem
          data={item}
          onSelect={(dataItem) => onSelect(dataItem, index)}
          onDelete={onDelete}
          key={item.id}
        ></TodoItem>
      ))}
    </div>
  );
};

export default Todos;
