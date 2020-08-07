//创建路由 /: http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "hi jcq" });
});

//http://localhost:5000/api/v1/mscamps
app.get("/api/v1/mscamps", (req, res) => {
  res.status(200).json({ success: true, msg: "获取所有米修数据" });
});

//http://localhost:5000/api/v1/mscamps/:id
app.get("/api/v1/mscamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}获取单个米修数据` });
});

//创建数据
app.post("/api/v1/mscamps", (req, res) => {
  res.status(200).json({ success: true, msg: "创建米修数据" });
});

//更新数据
app.put("/api/v1/mscamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}更新米修数据` });
});

//删除数据
app.delete("/api/v1/mscamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}删除米修数据` });
});
