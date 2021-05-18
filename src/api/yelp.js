import axios from 'axios';
import {API_Key} from './keys';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${API_Key}`
    }
});

