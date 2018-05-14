import { Router } from 'express'

import Dream from '../entities/Dream'
import Identifiable​​ from '../entities/Identifiable'
import StoreInterface from '../store/StoreInterface'
import GetAllInterface from '../store/GetAllInterface'

class DreamController {
  dreamStore: StoreInterface<Identifiable​​> & GetAllInterface<Identifiable​​>

  constructor(dreamStore: StoreInterface<Identifiable​​> & GetAllInterface<Identifiable​​>) {
    this.dreamStore = dreamStore
  }

  get = (req, res, next) => {
    const id = req.params.id as string
    const dream = this.dreamStore.get(id)

    if (!dream) {
      res.status(404).json({ error: 'Not found' })
    } else {
      res.json(dream)
    }
  }

  post = (req, res, next) => {
    const dream: Dream = {
      id: `${Date.now()}`,
      created_at: new Date(),
      value: req.query.text as string,
    }
  
    try {
      this.dreamStore.set(dream)
      res.json(dream)
    } catch(e) {
      next(e)
    }
  }

  delete = (req, res, next) => {
    try {
      this.dreamStore.unset(req.params.id as string)
      res.json({})
    } catch(e) {
      next(e)
    }
  }

  getAll = (req, res, next) => {
    try {
      res.json(this.dreamStore.getAll())
    } catch(e) {
      next(e)
    }
  }
}

export default DreamController
