class Order {
    constructor(id, bookId, quantity) {
        this.id = id;
        this.bookId = bookId;
        this.quantity = quantity;
        this.status = "pending";
    }
}

module.exports = Order;