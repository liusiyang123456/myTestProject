import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import Qs from "qs";
import { Link } from "react-router-dom";
export default function Edit() {
  const [curId, setCurId] = useState(0);
  //给data一个初始值
  const [data, setData] = useState([
    {
      id: 1,
      sex: "男",
      name: "邓超",
      description: "大家好，我是。。。。 见到你很高兴"
    },
    {
      id: 2,
      sex: "女",
      name: "姜平",
      description: "大家好，我是。。。。 见到你很高兴"
    },
    {
      id: 3,
      sex: "男",
      name: "韩刚",
      description: "大家好，我是。。。。 见到你很高兴"
    },
    {
      id: 4,
      sex: "女",
      name: "雷娜",
      description: "大家好，我是。。。。 见到你很高兴"
    }
  ]);

  //读取缓存
  useEffect(() => {
    const storageData = window.localStorage.getItem("getData");
    if (storageData) {
      setData(JSON.parse(storageData));
    }
  }, []);
  //表单
  const [form] = Form.useForm();
  useEffect(() => {
    //url的参数集合
    let params = Qs.parse(window.location.href.split("?")[1]);

    setCurId(params.id);
    const curIndex = data.findIndex((item) => item.id === params.id);
    //表单回显

    form.setFieldsValue(data[curIndex]);
  }, [data, form]);

  //校验通过执行的方法
  const onFinish = (values) => {
    const curIndex = data.findIndex((item) => item.id === curId);
    const shouldSendId = data.length + 1;
    if (curIndex === -1) {
      // console.log(data);
      data.unshift({
        ...values,
        id: shouldSendId
      });
      console.log(data);
      localStorage.setItem("getData", JSON.stringify(data));
      //新增用户倒排
    } else {
      data[curIndex] = { ...values, id: data[curIndex].id };
      localStorage.setItem("getData", JSON.stringify(data));
      setTimeout(() => {
        alert("修改成功");
      }, 1000);
    }
  };
  //校验失败执行的方法
  const onFinishFailed = (errorInfo) => {
    //打印错误信息
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Link to="/">返回列表页</Link>
      <div>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8
          }}
          wrapperCol={{
            span: 16
          }}
          initialValues={{
            remember: true
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="name"
            rules={[
              {
                required: true,
                message: "请输入用户名"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="性别"
            name="sex"
            rules={[
              {
                required: true,
                message: "Please input your password!"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="描述"
            name="description"
            rules={[
              {
                required: false
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
