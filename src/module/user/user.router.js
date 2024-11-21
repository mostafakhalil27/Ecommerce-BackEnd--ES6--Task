import {Router} from 'express';
const router = Router();

import { 
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getSpecialUsers,
  getSpecialUsersByID,
  getUsersProducts 
} from './controller/user.controller.js'

router.post('/addUser', addUser);
router.patch('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.get('/getUsers', getUsers);
router.get('/getSpecialUsers', getSpecialUsers);
router.get('/getSpecialUsersByID', getSpecialUsersByID);
router.get('/getUsersProducts', getUsersProducts);

export default router;