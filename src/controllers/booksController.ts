 import {Request, Response} from 'express';

 class BooksController {
    
    public index(req: Request, res:Response):void {
        res.render('books/index', {
            title:'books',
        })
    }

     public renderBook (req: Request, res: Response): void {
         res.render('books/add', {
             title: 'Add a Book'
         })
     }
 }

 export const bookController = new BooksController;