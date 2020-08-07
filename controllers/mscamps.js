exports.getMscamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "获取所有米修数据" });
};

exports.createMscamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "创建米修数据" });
};
