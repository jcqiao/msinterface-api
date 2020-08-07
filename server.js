const express = require("express")
const dotenv = require("dotenv")

dotenv.config({
  //找到对应路径
  path: "./config/config.env"
})

const app = express()

//获取端口号
const PORT = process.env.PORT || 3000

//监听端口号 开发模式 process.env.NODE_ENV在config.env配置完
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))