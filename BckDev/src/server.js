import { GraphQLServer } from "graphql-yoga"
import resolvers from "./graphql/resolvers/index.js"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
//import { validateToken } from "./Utils/tokenUtils.js";


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/*
const getUserData = (token) => {
    const verificacion = validateToken(token.split(" ")[1]);
    if (verificacion.data) {
        return verificacion.data;
    } else {
        return null
    }
}
*/

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname, "graphql/schema.graphql"),
    resolvers,
    /*
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
    */
})