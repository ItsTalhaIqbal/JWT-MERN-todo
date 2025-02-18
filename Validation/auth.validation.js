import joi from 'joi'

export const authDataValidate= joi.object({
    name: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
});
