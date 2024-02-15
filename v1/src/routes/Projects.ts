import express from 'express'
import { create, index } from '../controllers/Projects'

// Validations
import validate from '../middlewares/validate'
import {createSchema} from '../validations/Projects'

const router = express.Router()

router.post('/create',validate(createSchema), create)
router.get('/', index)

export default router