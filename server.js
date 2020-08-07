const express = require("express");
const dotenv = require("dotenv");

//引入路由文件
const mscamps = require("./routes/mscamps.js");

dotenv.config({
  //找到对应路径
  path: "./config/config.env",
});

const app = express();

//创建路由 /: http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "hi jcq" });
});

//挂载路由节点 当访问/api/v1/mscamps 时会去执行mscamps中路由
app.use("/api/v1/mscamps", mscamps);

//获取端口号
const PORT = process.env.PORT || 3000;

//监听端口号 开发模式 process.env.NODE_ENV在config.env配置完
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
