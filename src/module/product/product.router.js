import {Router} from 'express';
const router = Router();
import { 
  addProduct, 
  updateProduct, 
  deleteProduct, 
  getProducts,
  getSpecialProducts 
} from './controller/product.controller.js';

router.post('/addProduct', addProduct);
router.patch('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/getProducts', getProducts);
router.get('/getSpecialProducts',getSpecialProducts);

export default router;