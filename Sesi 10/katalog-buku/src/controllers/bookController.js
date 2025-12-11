const { books } = require('../data/database');
const Book = require('../models/bookModel');

exports.addBook = (req, res) => {
    const { title, author, stock } = req.body;

    const newBook = new Book(books.length + 1, title, author, stock);
    books.push(newBook);

    res.json({ message: "Buku ditambahkan", data: newBook });
};

exports.searchBooks = (req, res) => {
    const { title } = req.query;

    if (title) {
        const result = books.filter(b =>
            b.title.toLowerCase().includes(title.toLowerCase())
        );
        return res.json(result);
    }

    res.json(books);
};

exports.updateStock = (req, res) => {
    const book = books.find(b => b.id == req.params.id);

    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan." });

    const { stock } = req.body;
    book.stock = stock;

    res.json({ message: "Stok diperbarui", data: book });
};
