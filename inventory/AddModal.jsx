import { Button, Modal } from "antd";
import { Form, Input, Select } from "antd";
import { useState } from "react";
import "antd/dist/antd.css";
import EditIcon from "@mui/icons-material/Edit";

import TextField from "@mui/material/TextField";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // console.log(e);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!"
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!"
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!"
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      Quantity: "Add Quantity",
      Catagory: "Add catagory"
    });
  };

  return (
    <>
      <Button onClick={showModal}>Add Items</Button>
      <Modal
        title="Add Items"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="Item Name"
            label="Item Name"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Quantity"
            label="Quantity"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Catagory"
            label="Catagory"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Company"
            label="Company"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Date"
            label="Date"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          ></Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>

        {/* 
        <TextField id="standard-basic" label="Quantity" variant="standard" />

        <TextField id="standard-basic" label="Catatgory" variant="standard" />

        <TextField id="standard-basic" label="Price" variant="standard" /> */}
      </Modal>
    </>
  );
};

export default App;
