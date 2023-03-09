import express from 'express';
import author from './api/Author';
import book from './api/Book';

const routes = express.Router();

routes.use('/author', author);
routes.use('/book', book);

export default routes;
