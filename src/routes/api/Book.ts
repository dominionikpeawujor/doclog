import express from 'express';
import bookController from '../../controllers/Book';
import { Schemas, ValidateSchema } from '../../middleware/ValidateSchema';

const book = express.Router();
book.post('/create', ValidateSchema(Schemas.book.create), bookController.createBook);
book.get('/get/:bookId', bookController.readBook);
book.get('/get/', bookController.readAllBook);
book.patch('/update/:bookId', ValidateSchema(Schemas.book.update), bookController.updateBook);
book.delete('/delete/:bookId', bookController.deleteBook);

export = book;
