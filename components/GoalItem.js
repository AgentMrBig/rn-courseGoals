import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,

    },
});

export default GoalItem;