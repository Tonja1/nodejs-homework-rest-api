const { isValidObjectId } = require('mongoose');
const createError = require('http-errors');

const isVslidId = (req, res, next) => {
    const { contactId } = req.params;
    const result = isValidObjectId(contactId);
    if (!result) {
        throw createError(400, `Invalid format id`);
    }
    next();
};
module.exports = isVslidId;