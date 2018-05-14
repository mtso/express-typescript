import { Router } from 'express'

import Dream from '../entities/Dream'
import DreamController from '../controllers/DreamController'
import MemoryStore from '../store/MemoryStore'

const dreamRouter = Router()
const dreamController = new DreamController(new MemoryStore())

dreamRouter.get('/', dreamController.getAll)
dreamRouter.post('/', dreamController.post)
dreamRouter.get('/:id', dreamController.get)
dreamRouter.delete('/:id', dreamController.delete)

export default dreamRouter
