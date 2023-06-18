const contactsOperations = require('../../models/contactsModels');
const contactShema = require('../../shema/shema');

const addContact = async (req, res, next) => {
    try {
        const { error } = contactShema.validate(req.body);
        if (error) {
            error.status = 400;
            throw error;
        }
        const result = await contactsOperations.addContact(req.body);
        res.status(201).json({
            status: 'success',
            code: 201,
            data: {
                result,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = addContact;