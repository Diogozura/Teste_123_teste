import { GRAPHQL_QUERY } from './../../src/graphql/queries';
import {request} from 'graphql-request'
import config from "../../src/config"

export const loadDadus = async () => {
    const data = await request(config.graphqlURL, GRAPHQL_QUERY)
    return data
}