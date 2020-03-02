## Autocomplete Backend
Install all the dependencies using *yarn*:
```
yarn
```
Then you can run the API with:
```
yarn start
```

The API will run in http://localhost:3001

### Endpoints
There will only be one endpoint available: 
```GET``` to **/search**

```GET``` http://localhost:3001/search?word=

***Notes:*** *This API was written using Node.js version: 12.1.0*

### Curl
```
curl http://localhost:3001/search\?word\=a
```

---

### Dependencies:
This API was built using:
  - Express.js