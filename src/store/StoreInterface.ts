export default interface StoreInterface <T> {
  get(id: string): T | null
  set(item: T)
  unset(id: string)
}
