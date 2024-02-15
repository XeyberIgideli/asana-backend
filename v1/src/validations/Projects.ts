import Joi from "joi"

const createSchema = Joi.object({
    name: Joi.string().min(3).required(),
})

export {
    createSchema
}
