const express = require("express");
const dotenv = require("dotenv");

dotenv.config({
  //找到对应路径
  path: "./config/config.env",
});

const app = express();
//创建路由 /: http://localhost:5000
app.get("/", (req, res) => {
  // res.send("<h1>hi welcome</h1>");
  // res.send({ msg: "hi welcome" }); json1
  //json2
  // res.json({ success: true });
  //发送状态码
  // res.sendStatus(400);
  //设置状态码
  // res.status(400).json({ success: false });
  res.status(200).json({ success: true, msg: "hi jcq" });
});
//http://localhost:5000/api/v1/mscamps
app.get("/api/v1/mscamps", (req, res) => {
  res.status(200).json({ success: true, msg: "获取所有米修数据" });
});

//获取端口号
const PORT = process.env.PORT || 3000;

//监听端口号 开发模式 process.env.NODE_ENV在config.env配置完
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
