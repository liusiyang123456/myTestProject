import React, { useState, useEffect } from "react";
import { List } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
export default function CustormerList() {
  const [data, setData] = useState([]);

  //初始化给data赋值
  useEffect(() => {
    //真实生产环境应该用ajax请求得来真实数据 我这里先用localstorage模拟一下 第一次用这个ide, mock还不太会用
    const storageData = window.localStorage.getItem("getData");
    if (!storageData) {
      setData([
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
    } else {
      setData(JSON.parse(storageData));
    }
  }, []);

  //删除函数
  const deleteCustormer = (id) => {
    console.log(id, "id");
    //根据id 发送删除选中的列的请求 这里就先用删除数组元素来代替一下
    const curIndex = data.findIndex((item) => item.id === id);

    //拷贝一份 不然页面不刷新
    const newData = [...data];
    newData.splice(curIndex, 1);
    setData(newData);
  };

  //
  return (
    <>
      <div className="topContent">
        <h2 style={{ color: "blue" }}>注册用户列表</h2>
        <Link to="/edit">新增用户</Link>
      </div>

      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item key={item.id}>
            <List.Item.Meta title={item.name} description={item.description} />
            <div className="extraBox">
              <Link to={`/detail?id=${item.id}`}>查看详情</Link>
              <Link to={`/edit?id=${item.id}`}>编辑</Link>
              <span
                onClick={() => {
                  deleteCustormer(item.id);
                }}
              >
                删除
              </span>
            </div>
          </List.Item>
        )}
      />
    </>
  );
}
