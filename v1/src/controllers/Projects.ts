import { Request, Response } from "express"
import { createProject } from "../services/Projects"

const create = (req: Request,res: Response) => {
    try {
        createProject(req.body)
    } catch (err) {
        res.status(400).send({error: 'Error creating project'})
    }
}

const index = (req: Request,res: Response) => {
    console.log('index page')
}

export {create, index}