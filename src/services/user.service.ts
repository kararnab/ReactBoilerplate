import axios from "axios";
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
            if (axios.isAxiosError(error)) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error: ', error);
                return 'An unexpected error occurred';
            }
        });

};

export default {
    getItemList,
};