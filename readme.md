# PieSocket NodeJS SDK

A NodeJS Library for PieSocket Channels.

[PieSocket Channels](https://www.piesocket.com/blog/channels/) are a medium for clients and servers to communicate in real-time. Client-to-client communications are also supported.

Note: This package is for server-side publishing, if you are looking for the package to use on the Frontend for subscribing, please see [PieSocketJS](https://github.com/piesocket/piesocket-js).
## Installation

Yarn
```
yarn add piesocket-nodejs
```

NPM
```
npm i piesocket-nodejs
```

## Importing

Import module:

```javascript
const PieSocket = require("piesocket-nodejs");
```



## Publishing messages

1. Initialize the PieSocket class:
```javascript
var piesocket = new PieSocket({
    clusterId: 'YOUR_CLUSTER_ID',
    apiKey: 'YOUR_API_KEY',
    secret: 'YOUR_API_SECRET'
});
```

2. Publish:
```javascript
piesocket.publish(channelId, data);
```
[Channel ID](https://www.piesocket.com/docs/3.0/overview) can be a string or number,
`data` should be a String or JSON.

## Supported Methods
List of available methods on the PieSocket object

| Method                | Description                                     | Returns  |
| ----------------------------- | ----------------------------------------------------------------------------- | -------------- |
| publish(channelId, message)    | Publish to a channel                       |  Promise object |




## Configuration
Complete list of allowed configuration options

| Option                | Description                                     | Default  |
| ----------------------------- | ----------------------------------------------------------------------------- | -------------- |
| apiKey             | Your PieSocket API key                |  null |
| clusterId          | Your API key's cluster ID                       |  `demo` |
| secret             | Your PieSocket API key                       |  null |

  
## Reference
- PieSocketJS: [PieSocket Browser SDK](https://github.com/piesocket/piesocket-js)
- Documentation: [PieSocket WebSocket docs](https://piesocket.com/docs)