const contactsOperations = require("../../models/contactsModels");

const getAll = async (req, res, next) => {
    console.log("TEST getAll");
    try {
        const result = await contactsOperations.listContacts();

        console.log("TEST result", result);

        res.json({
            status: "success",
            code: 200,
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = getAll;
