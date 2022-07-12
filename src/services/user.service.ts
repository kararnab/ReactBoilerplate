import axios from 'axios';
import { BASE_URL, URL } from "./Constants";
import authHeader, { processAPIError } from './util';

interface Item {
    id: number;
    name: string;
}

const getItemList = () => {

    return axios.get<Item[]>(BASE_URL + URL.LIST_ITEM, {
        timeout: 1000,
        headers: authHeader(),
    })
        .catch((error) => {
            return processAPIError(error);
        });

};

export default {
    getItemList,
};