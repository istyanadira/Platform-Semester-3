const express = require('express');
const app = express();

app.use(express.json());

// import routes
const bookRoutes = require('./routes/bookRoutes');
const orderRoutes = require('./routes/orderRoutes');

// daftar routes
app.use('/books', bookRoutes);
app.use('/order', orderRoutes);

// jalankan server
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});