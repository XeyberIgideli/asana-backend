import { Request, Response, NextFunction } from "express"
import {ValidationErrorItem} from 'joi'

const validate = (schema: any) => (req:Request,res: Response,next: NextFunction) => {
    const { value, error } = schema.validate(req.body)

    if(error) {
        const errorMessage = error.details.filter((detail: ValidationErrorItem) => detail.message).join(", ")
        return res.status(400).send({ 
            status: false,  
            message: `Validation Error: ${errorMessage}`  
         })
    }
    console.log(value)
    Object.assign(req,value)
    return next()
}

export default validate