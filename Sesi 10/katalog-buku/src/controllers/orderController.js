const { books, orders } = require('../data/database');
const Order = require('../models/orderModel');

let orderId = 1;

exports.createOrder = (req, res) => {
    const { bookId, quantity } = req.body;

    if (quantity <= 0) {
        return res.status(400).json({ message: "Jumlah tiket harus > 0" });
    }

    const book = books.find(b => b.id == bookId);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });

    if (book.stock < quantity) {
        return res.status(400).json({ message: "Stok tidak cukup" });
    }

    const newOrder = new Order(orderId++, bookId, quantity);

    // kurangi stok buku
    book.stock -= quantity;

    orders.push(newOrder);

    res.json({ message: "Pesanan dibuat", data: newOrder });
};

exports.confirmOrder = (req, res) => {
    const order = orders.find(o => o.id == req.params.id);

    if (!order) return res.status(404).json({ message: "Pesanan tidak ditemukan" });

    order.status = "confirmed";
    res.json({ message: "Pesanan dikonfirmasi", data: order });
};
