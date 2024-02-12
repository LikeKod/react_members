import { Account, Client, Databases, Query } from 'appwrite'

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = 'auth-first-level'

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID)

export const account = new Account(client)

const databases = new Databases(client);

// const promise = databases.createDocument(
//     'api_coin-project',
//     '12345',
//     ID.unique(),
//     { "title": "Hamlet" }
// );

let promise = databases.listDocuments(
    'api_coin-project',
    '12345',
    [
        Query.equal('title', 'Hamlet')
    ]
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

export default client
