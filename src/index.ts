import express from 'express';
import { helloWorld} from './routes';
const app = express();

app.get('/', helloWorld);

// Need to redirect the port
app.listen(3333);
