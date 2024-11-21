import userRouter from './module/user/user.router.js';
import productRouter from './module/product/product.router.js';

function bootstrap(express, app) {
  app.use(express.json());
  app.use(userRouter);
  app.use(productRouter);  
}

export default bootstrap;