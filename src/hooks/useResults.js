import yelp from '../api/yelp';
import {useEffect, useState} from 'react';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const getResults = async term => {
        setErrorMessage('');
        try {
            const config = {
                params: {
                    term,
                    limit: 50,
                    location: 'san jose'
                }
            }
            const response = await yelp.get(`/search`, config);
            console.log(response.data);
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        getResults('pasta');
    }, [])

    return [getResults, results, errorMessage]
}
