import express from 'express';
import bookController from '../../controllers/Book';

const book = express.Router();
book.post('/create', bookController.createBook);
book.get('/get/:bookId', bookController.readBook);
book.get('/get/', bookController.readAllBook);
book.patch('/update/:bookId', bookController.updateBook);
book.delete('/delete/:bookId', bookController.deleteBook);

export = book;
