# Denison Washroom Status API

## Table of Content:

- [Endpoint URI](#endpoint)
- [Sample request body](#sample-request-body)
- [Sample response body](#sample-response-body)
- [Technologies](#technologies)

## Endpoint

- POST http://us.wilsonle.me:7345

## Sample Request Body

```
{
	"room": "Curtis Hall"
}
```

Possible hall names:

- Schaffer House
- Beaver Hall
- Beta House
- Chamberlin House
- Crawford Hall
- Curtis Hall
- East Hall
- Lower Elm
- Upper Elm
- Gilpatrick House
- Hayes Appartment
- Huffman Hall
- Kappa Sigma
- King Hall
- Morrow House
- Moshier-Huchison House
- Preston House
- Sawyer Hall
- Shaw Hall
- Shepardson Hall
- Silverstein Apartments - 2nd
- Silverstein Apartments - 4th
- Smith Hall
- Stone Hall
- Pratt Hall
- Brown Hall
- Myers Hall
- Good Hall
- Sunset House
- Taylor House
- Wright Apartments;

## Sample Response Body

```

	{
    "machineStatus": {
        "dryers": [
            {
                "type": "dryer",
                "remainingSeconds": 3300,
                "status": "READY TO START"
            },
            {
                "type": "dryer",
                "remainingSeconds": 3300,
                "status": "READY TO START"
            },
            {
                "type": "dryer",
                "remainingSeconds": 3300,
                "status": "AVAILABLE"
            },
            {
                "type": "dryer",
                "remainingSeconds": 3600,
                "status": "AVAILABLE"
            }
        ],
        "washers": [
            {
                "type": "washer",
                "remainingSeconds": 1800,
                "status": "READY TO START"
            },
            {
                "type": "washer",
                "remainingSeconds": 1800,
                "status": "READY TO START"
            },
            {
                "type": "washer",
                "remainingSeconds": 1800,
                "status": "READY TO START"
            },
            {
                "type": "washer",
                "remainingSeconds": 1800,
                "status": "AVAILABLE"
            },
            {
                "type": "washer",
                "remainingSeconds": 1800,
                "status": "AVAILABLE"
            }
        ],
        "availableDryers": 4,
        "completeDryers": 0,
        "inUsedDryers": 0,
        "errorDryers": 0,
        "availableWasher": 5,
        "completeWashers": 0,
        "inUsedWashers": 0,
        "errorWashers": 0,
        "messages": "Right now, there are 5 available washer, and 4 available dryers"
    }
}
```

## Siri Shortcut

- Link to the Siri shortcut that calls this API:
- https://www.icloud.com/shortcuts/a33cb27280894c26a00a3c7814000c6c
- This will allow you to ask Siri to speak the "messages" key of the response body whenever you say "washroom status"
- You can customize the summon command (default by "washroom status") to whatever you like by editing the shortcut yourself.
- You can edit the hall you want to know the status of (usually the hall you are living in). By default it's Curtis Hall because I live there 😁

![How to change the hall you want to get status of](static/screenshot.jpeg)

## Technologies

- [Docker](https://www.docker.com)
- [NodeJS](https://nodejs.org/en/)
