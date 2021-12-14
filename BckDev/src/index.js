import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import resolvers from "./graphql/resolvers/index.js"
import { ApolloServer } from 'apollo-server-express';
import { validateToken } from "./utils/tokenUtils.js";
import conectarBD from './database.js';
import {tipos} from "./graphql/schemas.js"


dotenv.config();

const getUserData = (token) => {
    const verificacion = validateToken(token.split(" ")[1]);
    if (verificacion.data) {
        return verificacion.data;
    } else {
        return null
    }
}

export const server = new ApolloServer({
    typeDefs: tipos,
    resolvers,
    context: ({ req }) => {
        const token = req.headers?.authorization ?? null;
        if (token) {
          const userData = getUserData(token);
          if (userData) {
            return { userData };
          }
        }
        return null;
      },
})

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});