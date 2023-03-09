import express from 'express';
import authorController from '../../controllers/Author';

const author = express.Router();
author.post('/create', authorController.createAuthor);
author.get('/get/:authorId', authorController.readAuthor);
author.get('/get/', authorController.readAllAuthor);
author.patch('/update/:authorId', authorController.updateAuthor);
author.delete('/delete/:authorId', authorController.deleteAuthor);

export = author;
