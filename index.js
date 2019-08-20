/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */

const apiKey = process.env.APIKEY || '<API Key>';
const apiSecret = process.env.APISECRET || '<API Secret>';
const airtableapiKey = process.env.AIRTABLE_API_KEY || '<Airtbale Key>';
const airtableBase = process.env.AIRTABLE_API_KEY || '<Airtbale Base>';

const request = require('request');
const Airtable = require('airtable');
const Client = require('coinbase').Client;
var client = new Client({'apiKey': apiKey, 'apiSecret': apiSecret});

exports.updateCryptoPrice = (event, context) => {
  const pubsubMessage = event.data;
  console.log(Buffer.from(pubsubMessage, 'base64').toString());
  const payload = event.data
    ? Buffer.from(event.data, 'base64').toString()
    : 'BTC-USD';
  var payload_json = JSON.parse(payload);
  var coin = payload_json.coin; //payload;
  var recordID = payload_json.recordID ; //event.attributes.recordID;
  var base = new Airtable({apiKey: airtableapiKey }).base(airtableBase);

  client.getBuyPrice({'currencyPair': coin}, function(err, price) { 
    base('Accounts').update(recordID, {
        "Crypto Price Today (USD)": parseFloat(price.data.amount)
      }, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record.get('Holdings'));
    });
    
  });
};
