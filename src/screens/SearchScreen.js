import React, {useState, useEffect} from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [getResults, results, errorMessage] = useResults();

    return (
        <>
            <SearchBar
                query={query}
                setQuery={setQuery}
                onTermSubmit={() => getResults(query)}
            />
            <Text>Results: {results.length}</Text>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
        </>
    )
};

const styles = StyleSheet.create({});

export default SearchScreen;
