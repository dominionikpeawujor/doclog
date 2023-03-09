import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Book from '../models/Book';

const createBook = async (req: Request, res: Response, next: NextFunction) => {
    const { title, author } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        title,
        author
    });

    try {
        const book_1 = await book.save();
        return res.status(201).json({ book });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const readBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;

    try {
        const book = await Book.findById(bookId);
        return book
            ? res.status(200).json({ book })
            : res.status(404).json({
                  message: 'Not Found'
              });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
const readAllBook = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Book.find();
        return res.status(200).json({ books });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const updateBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return Book.findById(bookId)
        .then((book: any) => {
            if (book) {
                book.set(req.body);

                return book
                    .save()
                    .then((book: any) => res.status(201).json({ book }))
                    .catch((error: any) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not Found' });
            }
        })
        .catch((error: any) => res.status(500).json({ error }));
};

const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
    const bookId = req.params.bookId;
    return Book.findByIdAndDelete(bookId)
        .then((book: any) => (book ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not Found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createBook, readBook, readAllBook, updateBook, deleteBook };
