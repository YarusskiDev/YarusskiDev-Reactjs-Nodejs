import { Router } from 'express';
import UserController from '../controllers/UserController';

const userController = new UserController();

const userRoutes = Router();

userRoutes.get('/users', userController.index);
userRoutes.get('/users/:id', userController.show);
userRoutes.post('/users', userController.store);
userRoutes.put('/users/:id', userController.update);
userRoutes.delete('/users/:id', userController.delete);

export default userRoutes;
