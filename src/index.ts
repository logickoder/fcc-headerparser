import express, { Express, Request, Response } from 'express';
// import * as express from 'express'
import { AddressInfo } from 'net'
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

// init project
dotenv.config();
const app: Express = express();
const port = process.env.PORT;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (_req: Request, res: Response) {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// your first API endpoint...
app.get('/api/hello', function (_req: Request, res: Response) {
    res.json({ greeting: 'hello API' });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log('Your app is listening on port ' + ((listener?.address() as AddressInfo)?.port ?? ''));
});
