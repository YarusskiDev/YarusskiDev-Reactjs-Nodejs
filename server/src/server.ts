import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import userRoutes from './routes/index';
import { db } from './database/db';
import path from 'path';
const app = express();
app.use(express.json());
app.use(cors());
console.log(process.env.DATABASE_PASS);
// PASTA PÚBLICA PARA ARQUIVOS ESTÁTICOS (IMG, JS, CSS...)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);
app.listen(3333, async () => {
  await db.sync({ force: true });
  console.log('server is working...');
});
