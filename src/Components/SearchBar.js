import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ query, setQuery, onTermSubmit }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name={'search'} size={30} style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                value={query}
                onChangeText={(text) => setQuery(text)}
                placeholder={'Search'}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
