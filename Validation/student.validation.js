import joi from 'joi'

export const StudentDataValidate= joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    phone: joi.string().min(10).max(11).required(),
});
