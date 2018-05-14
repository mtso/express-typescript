import StoreInterface from './StoreInterface'
import GetAllInterface from './GetAllInterface'
import Identifiable from '../entities/Identifiable'

export default class MemoryStore
implements StoreInterface<Identifiable>, GetAllInterface<Identifiable> {
  private store: Array<Identifiable>

  constructor() {
    this.store = []
  }

  get(id: string): Identifiable | null {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].id === id) {
        return this.store[i]
      }
    }
    return null
  }

  set(item: Identifiable) {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].id === item.id) {
        this.store[i] = item
        return
      }
    }
    this.store.push(item)
  }

  unset(id: string) {
    for (let i = 0; i < this.store.length; i++) {
      if (this.store[i].id === id) {
        this.store.splice(i, 1)
      }
    }
  }

  getAll(): Array<Identifiable> {
    return this.store
  }
}
