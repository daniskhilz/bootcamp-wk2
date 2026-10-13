const { users } = require("../data/users");

const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    data: users,
    length: users.length,
  });
};

module.exports = { getAllUsers };
