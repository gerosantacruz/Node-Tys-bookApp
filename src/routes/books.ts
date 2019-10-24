import { Router } from 'express';
const router: Router = Router();

import {bookController} from '../controllers/bookscontroller'


router.get('/', bookController.renderBook);

export default router;