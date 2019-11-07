
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { restaurant } from './routes'

const app = express()

app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors());

app.use('/restaurants', restaurant)

// Catch 404 and forward to error handler
app.use((req, res) => {
  res.status = 404;
  return res.send('Not found');
})

export default app