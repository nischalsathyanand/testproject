import { action, observable } from 'mobx'

class BuyStore {
  @observable orders = []
  @action getOrders() {}
}
const buyStore = new BuyStore()
export default buyStore
