import axios from 'axios';
import { BASE_URL, URL } from './Constants';
import authHeader, { processAPIError } from './util';

interface Item {
    id: number;
    name: string;
    price: number;
}

const getItemList = (query: string) => {
    console.log(`Query: ${query}`);
    return axios.get<Item[]>(BASE_URL + URL.LIST_ITEM, {
        timeout: 10000,
        headers: authHeader(),
    })
        .catch((error) => {
            return processAPIError(error);
        });

};

export default {
    getItemList,
};