import axios from 'axios';
import express from 'express';

import secrets from './secrets.json';
import { HallNumber, RequestBody, ResponseData } from './types';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
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
    // manipulate MachineStatus data to make it more readable
    res.json({ machineStatus: data } as ResponseData);
  } else {
    res.json({
      error: 'Invalid room name',
    } as ResponseData);
  }
});

app.listen(secrets.port, () =>
  console.log(`Server listening on port ${secrets.port}`)
);
