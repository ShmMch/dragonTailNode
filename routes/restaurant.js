import express from 'express'
import multer from 'multer';
import { restaurant } from '../controllers'
const router = express.Router();
const upload = multer({ inMemory: true}).single('file');

router.get('/', restaurant.getAll);
router.post('/upload', upload, restaurant.insertMany);
router.delete('/:id', restaurant.deleteRestaurant);

export default router;