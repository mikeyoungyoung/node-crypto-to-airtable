# node-crypto-to-airtable
A GCP Cloud function that updates recent crypto asset prices into Airtable Records

This function is triggered by a pubsub topic with a payload like 
``` {"coin":"BTC-USD","recordID":"recAOJD8237ud"} ```

To update multiple coin-currency combinations a cloud scheduler job is created with a json paylod per combination

![Diagram](https://raw.githubusercontent.com/mikeyoungyoung/node-crypto-to-airtable/master/NodeCrypto.png)
