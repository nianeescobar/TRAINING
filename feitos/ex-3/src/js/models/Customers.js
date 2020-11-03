export class Customers {
    constructor() {
        this.list = []
    }
    add(customer) {
        this.list.push(customer)
    }
    getCustomers() {
        return this.list
    }
    remove(i) {
        this.list.splice(i, 1)
    }
}