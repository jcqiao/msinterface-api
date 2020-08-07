const express = require("express");
const router = express.Router();

//http://localhost:5000/api/v1/mscamps
router.get("/", (req, res) => {
  res.status(200).json({ success: true, msg: "获取所有米修数据" });
});

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}获取单个米修数据` });
});

//创建数据
router.post("/", (req, res) => {
  res.status(200).json({ success: true, msg: "创建米修数据" });
});

//更新数据
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}更新米修数据` });
});

//删除数据
router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}删除米修数据` });
});

module.exports = router;
