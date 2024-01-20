import { useSelector } from 'react-redux';
import classes from './index.module.css';
import {Modal,Form,Input,Button,Space,Select} from 'antd';
const AddItem = ({show,onAdd,onCancel})=>{
  const status = useSelector(state => state.todos.status);
  const [form] = Form.useForm();
  const onFinish = (value)=>{
    onAdd(value);
    form.resetFields();
  }
  return (
    <Modal open={show} footer={null}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="任务名称" name="name">
          <Input></Input>
        </Form.Item>
        <Form.Item label="任务状态" name="status">
          <Select>
            {status.map((item) => (
              <Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button htmlType="reset" onClick={onCancel}>取消</Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}
export default AddItem;