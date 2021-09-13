const axios = require('axios');

const defaultOptions = {
  version: 3,
  clusterId: 'demo',
  apiKey: null,
  secret: null
}

class PieSocket{
  
  constructor(options) {
    options = options || {};
    this.options = {...defaultOptions, ...options };
    this.connections = {}
  }

  publish(channelId, payload){
    var pubData = {
      key: this.options.apiKey,
      secret: this.options.secret,
      channelId: channelId,
      message: payload
    };

    return axios({
      method: 'post',
      url: `https://${this.options.clusterId}.piesocket.com/api/publish?src=piesocket-nodejs&v=${this.options.version}`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(pubData)
    });
  }
}

module.exports = PieSocket;