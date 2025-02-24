import dotenv from 'dotenv';
import path from 'path';

// Manually load .env file
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3001;


app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});