exports.getMscamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "获取所有米修数据" });
};

exports.createMscamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "创建米修数据" });
};

//获取一个
exports.getMscamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}获取单个米修数据` });
};

//更新数据
exports.updateMscamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}更新米修数据` });
};

//删除数据
exports.deleteMscamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}删除米修数据` });
};
