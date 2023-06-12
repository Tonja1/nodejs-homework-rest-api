const createError = require('http-errors');
const contactsOperations = require('../../models/contactsModels');
const contactShema = require('../../shema/shema');

const update = async (req, res, next) => {
    try {
        const { error } = contactShema.validate(req.body);
        if (error) {
            error.status = 400;
            throw error;
        }
        const { contactId } = req.params;
        const result = await contactsOperations.updateById(contactId, req.body);
        if (!result) {
            throw createError(404, `Contact with id=${contactId} not found`);
        }
        res.json({
            status: 'siccess',
            code: 201,
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = update;