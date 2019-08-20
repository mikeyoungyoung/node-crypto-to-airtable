# node-crypto-to-airtable
A GCP Cloud function that updates recent crypto asset prices into Airtable Records

This function is triggered by a pubsub topic with a payload like 
``` {"coin":"BTC-USD","recordID":"recAOJD8237ud"} ```

To update multiple coin-currency combinations a cloud scheduler job is created with a json paylod per combination

[![IMAGE ALT TEXT HERE](https://www.lucidchart.com/documents/embeddedchart/cc62bf0d-d273-4ec1-9708-8cb04f994fc4)](https://www.lucidchart.com/documents/embeddedchart/cc62bf0d-d273-4ec1-9708-8cb04f994fc4)
