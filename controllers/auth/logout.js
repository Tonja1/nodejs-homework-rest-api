const { User } = require('../../models/user');

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: null });

    res.json({
        status: 'succes',
        code: 204,
        data: { message: `Logout sucess` },
    });
};

module.exports = logout;