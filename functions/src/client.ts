// Make sure you update the endpoint and the secret
import * as functions from 'firebase-functions';
import { GraphQLClient } from 'graphql-request';
import { getSdk, SdkFunctionWrapper } from './types';

// You can find both these values on the Graphql tab in Hasura
const gqlClient = new GraphQLClient(functions.config().hasura.graphql_api, {
  headers: {
    'content-type': 'application/json',
    'x-hasura-admin-secret': functions.config().hasura.graphql_admin_secret,
  },
});

const clientTimingWrapper: SdkFunctionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {
  const startTime = new Date();
  const result = await action();
  console.log('Request duration (ms)', Math.abs(new Date().getTime() - startTime.getTime()));
  return result;
};

export const client = getSdk(gqlClient, clientTimingWrapper);
