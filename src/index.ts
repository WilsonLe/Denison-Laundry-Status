import express from 'express';
import axios from 'axios';

import secrets from './secrets.json';
import { limiter } from './limiter';
import { log } from './log';
import { parseResponseData } from './parseData';
import { HallNumber, RequestBody, ResponseData } from './types';

const app = express();

app.use(express.json());
app.use(limiter);

app.post('/', async (req, res) => {
  log.info(req.ip);
  const body: RequestBody = req.body;
  const { room } = body;
  const hallNumber: HallNumber = secrets.hallNumber;
  const roomNumber = hallNumber[room];
  if (roomNumber) {
    const endpoint = `https://api.alliancelslabs.com/rooms/${roomNumber}/machines?raw=true`;
    const headers = {
      'X-Api-Key': secrets.apiKey,
      'Alliancels-Auth-Token': secrets.authToken,
    };
    const { data } = await axios.get(endpoint, { headers });
    const resData = parseResponseData(data);
    res.json(resData);
  } else {
    res.json({
      error: 'Invalid room name',
    } as ResponseData);
  }
});

app.listen(secrets.port, () =>
  log.info(`Server listening on port ${secrets.port}`)
);
