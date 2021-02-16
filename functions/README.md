# READ ME

## Firebase-tools
 
to test, develop and mangae firebase functions you need to install firebase-tools on your device
> npm install -g firebase-tools

To login using google type the following in your terminal
> firebase login

## Set local runtime variables

Variables can be found at in the [Heroku dashboard](https://dashboard.heroku.com/apps/hover-server/settings)

> firebase functions:config:set hasura.graphql_api="YOUR_GraphQL_API" hasura.graphql_admin_secret="ADMIN_SECRET"
OR
> firebase functions:config:get > .runtimeconfig.json

## Generate graphql types

Download the schema file
> gq https://hover-server.herokuapp.com/v1/graphql --header "X-Hasura-Admin-Secret: ADMIN_SECRET" --introspect > schema.graphql

Then generate
> npm run generate

## Testing and Deployment  

Check that your code runs 
> npm run serve

The command wil serve all functions locally, and each can be tested using tool such as Postman.

When the functions are ready for deployment
> npm run deploy

