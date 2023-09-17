import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator, FlatList, Text, StyleSheet } from "react-native";
import { useCallback } from "react";
import axios from "axios";

import ListItem from '../components/ListItem'

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#464646'
    },
    header: {
        padding: 10,
        backgroundColor: '#000',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
    }
});


const ListPage = () => {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
 
    const getCountriesData = useCallback(async () => {
        try {
            setLoading(true)
            const {data} = await axios.get("https://restcountries.com/v3.1/all/")
            setCountries(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getCountriesData()
    }, [])

    return (
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Países</Text>
            </View>
            <View>
                {loading === true ? <ActivityIndicator size={"large"}/> : <FlatList data={countries} renderItem={({item}) => <ListItem country={item}/>}/>}
            </View>
        </SafeAreaView>
    );
}

export default ListPage;