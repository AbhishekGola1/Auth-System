import express from 'express';
import morgan from 'morgan';

const app = express();


app.use(express.json());
app.use(morgan("dev"));              // Morgan is an HTTP request logger middleware for Express applications. It logs details about incoming requests such as: HTTP method (GET, POST, etc.), URL, status code, and response time.



export default app;