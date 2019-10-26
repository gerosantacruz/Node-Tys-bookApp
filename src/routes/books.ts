import { Router } from 'express';
const router: Router = Router();

import {bookController} from '../controllers/bookscontroller'


router.get('/', bookController.index);
router.get('/add', bookController.renderBook);

export default router;