import React, { useEffect, useState } from "react";
import Qs from "qs";
import { Link } from "react-router-dom";
export default function Detail() {
  const [curId, setCurId] = useState(0);
  useEffect(() => {
    //url的参数集合
    let params = Qs.parse(window.location.href.split("?")[1]);
    setCurId(params.id);
  }, []);

  useEffect(() => {
    console.log(curId, "curid是这个");
  }, [curId]);

  return (
    <div>
      <Link to="/">返回列表页</Link>
      详情页面
    </div>
  );
}
