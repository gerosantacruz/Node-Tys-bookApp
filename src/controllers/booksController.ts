 import {Request, Response} from 'express';

 class BooksController {
     public renderBook (req: Request, res: Response): void {
         res.render('books/add', {
             title: 'Add a Book'
         })
     }
 }

 export const bookController = new BooksController;