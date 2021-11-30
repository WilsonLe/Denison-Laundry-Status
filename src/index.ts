import axios from 'axios';
import express from 'express';
import { parseResponseData } from './parseData';

import secrets from './secrets.json';
import { HallNumber, RequestBody, ResponseData } from './types';

const app = express();
app.use(express.json());

app.post('/', async (req, res) => {
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
  console.log(`Server listening on port ${secrets.port}`)
);
