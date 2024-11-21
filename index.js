import express from 'express';
import bootstrap from './src/bootstrap.js';

const app = express();
const port = 3000;

bootstrap(express, app);

app.listen(port , ()=>{
  console.log(`server is running at ${port}`)
})