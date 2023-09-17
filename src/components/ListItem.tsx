import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ListRow from '../components/ListRow'

type ListItemProps = {
    country: {
        flags: {png: string};
        name: {common: string},
        capital: any,
        region: string,
        languages: any,
    }
}

const styles = StyleSheet.create({
    listItem: {
        padding: 12,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#464646',
        flexDirection:'row',
    },
    countryImage: {
        height: '100%', 
        width:'40%',
        resizeMode: 'contain',
    },
    rowContainer: {
        margin: 10,
        paddingRight: 10
    },
});

const ListItem = ({country}: ListItemProps) => {

    return(
        <View style={styles.listItem}>
            <Image
                style={styles.countryImage}
                source={{uri: country.flags.png}}
            />
            <View style={styles.rowContainer}>
                <ListRow  id={"Nome do País:"} value={country.name.common}/>
                <ListRow  id={"Capital:"} value={country.capital ? country.capital[Object.keys(country.capital)[0]] : "-"}/>
                <ListRow  id={"Região:"} value={country.region}/>
                <ListRow  id={"Língua:"} value={country.languages[Object.keys(country.languages)[0]]}/>
            </View>
        </View>
    )
}

export default ListItem