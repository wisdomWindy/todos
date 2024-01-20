import { useState } from "react";
import classes from "./index.module.css";
import {Input,Button} from 'antd';

const AddInput = (props) => {
  const { onAdd, onSearch } = props;
  const [text, setText] = useState("");
  const changeHandler = (e) => {
    setText(e.target.value);
  };
  return (
    <div className={classes["add-input"]}>
      <Input
        className={classes["input"]}
        type="text"
        value={text}
        placeholder="请输入待办项"
        onChange={changeHandler}
      />
      <Button type="primary" className={classes['btn']} onClick={() => onAdd(text)}>
        添加
      </Button>
      <Button type="default" className={classes['btn']} onClick={()=>onSearch(text)}>
        搜索
      </Button>
    </div>
  );
};

export default AddInput;
