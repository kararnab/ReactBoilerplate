import axios from 'axios';
import { processAPIError } from './auth.service';
import { BASE_URL, URL } from "./Constants";

interface Item {
    id: number;
    name: string;
}

const getItemList = () => {

    return axios.get<Item[]>(BASE_URL + URL.LIST_ITEM, {
        timeout: 1000
    })
        .catch((error) => {
            return processAPIError(error);
        });

};

export default {
    getItemList,
};