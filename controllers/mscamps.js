/**
 *
 * @desc 获取米修所有数据
 * @route GET /api/v1/mscamps
 * @access 公开的
 */
exports.getMscamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "获取所有米修数据" });
};

/**
 *
 * @desc 创建米修所有数据
 * @route POST /api/v1/mscamps
 * @access 公开的
 */

exports.createMscamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "创建米修数据" });
};

/**
 *
 * @desc 获取米修单个数据
 * @route GET /api/v1/mscamps/:id
 * @access 公开的
 */
exports.getMscamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}获取单个米修数据` });
};

/**
 *
 * @desc 更新米修数据
 * @route PUT /api/v1/mscamps/:id
 * @access 公开的
 */
exports.updateMscamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}更新米修数据` });
};

/**
 *
 * @desc 删除米修单个数据
 * @route delete /api/v1/mscamps/:id
 * @access 公开的
 */
exports.deleteMscamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `根据${req.params.id}删除米修数据` });
};
