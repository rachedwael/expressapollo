import SCHEMA from './schema.js';

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

const app = express();

// app.use('/graphiql', graphiqlExpress({
//     endpointURL: '/graphql'
// }));

// app.use('/graphql', bodyParser.json(), graphqlExpress({schema:SCHEMA}));


app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(4000,()=>{
    console.log('running in port 4000')
})

// const {ApolloServer,gql}=require('apollo-server');

// const books =[
//     {
//         title: 'Harry Potter and the Chamber of Secrets',
//         author: {
//         name:'J.K. Rowling',
//         SurName:"Rached"
//         },
//         year:2012,

//       },
//       {
//         title: 'Jurassic Park',
//         author: {
//             name:'Michael Crichton',
//             SurName:"Jackson"
//             },
//         year:2000
//       },
// ]

// const typeDefs = gql `
// # Comments in GraphQL are defined with the hash (#) symbol.

// # This "Book" type can be used in other type declarations.
// type Book {
//   title: String
//   author: Author
//   year: Int
// }
// type Author {
//     name: String
//     SurName: String
//     books:[Book]
//   }

// # The "Query" type is the root of all GraphQL queries.
// # (A "Mutation" type will be covered later on.)
// type Query {
//   books: [Book]
//   Authors: [Author]

// }
// type Mutation {
//     addBook(title: String, author: String): Book
//   }
// `;
// const resolvers={
//     Query:{
//         books :()=> books,
//         Authors :()=> Authors
//     }
// }

// const server = new ApolloServer({typeDefs,resolvers});

// server.listen().then(({url})=>{
//     console.log(`🚀  Server ready at ${url}`);
// })
