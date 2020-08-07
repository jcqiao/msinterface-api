const express = require("express");
const router = express.Router();

//引入控制器 controller
const { getMscamps, createMscamp } = require("../controllers/mscamps.js");

//http://localhost:5000/api/v1/mscamps
//当访问根路径时 就跳转 因此get->route 使用get方法执行getMscamps
//访问/会走get 或者 post
router.route("/").get(getMscamps).post(createMscamp);

router.get("/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}获取单个米修数据` });
});

//创建数据 与get合并
// router.route("/").post(createMscamp);

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
