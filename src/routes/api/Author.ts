import express from 'express';
import authorController from '../../controllers/Author';
import { Schemas, ValidateSchema } from '../../middleware/ValidateSchema';

const author = express.Router();
author.post('/create', ValidateSchema(Schemas.author.create), authorController.createAuthor);
author.get('/get/:authorId', authorController.readAuthor);
author.get('/get/', authorController.readAllAuthor);
author.patch('/update/:authorId', ValidateSchema(Schemas.author.update), authorController.updateAuthor);
author.delete('/delete/:authorId', authorController.deleteAuthor);

export = author;
