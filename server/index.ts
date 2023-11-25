import express, { Application } from 'express'
import { ArticleRouter } from './routes/article.routes';
import cors from 'cors'

const app: Application = express();

const port: number = 3001;

app.use(cors())
app.use('/', ArticleRouter)

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`)
});
