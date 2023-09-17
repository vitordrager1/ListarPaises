import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listRow: {
        columnGap: 5,
        flexDirection: 'row',
    },
    listRowId: {
        fontWeight: 'bold',
        color: '#fff',
    }
});

type ListRowProps = {
    id: string,
    value: string,
}

const ListRow = ({id , value}: ListRowProps) => {
    return(
        <View style={styles.listRow}>
            <Text style={styles.listRowId}>{id}</Text>
            <Text style={styles.listRowId}>{value}</Text>
        </View>
    );
};

export default ListRow;