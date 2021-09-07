import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const HistoryDisplay = props => {

    const { history, onClick } = props;

    return (
        <ScrollView contentContainerStyle={styles.root}>
            {history.map((history, i) => (
                <TouchableOpacity style={styles.item} key={i} onPress={() => onClick(history.result)}>
                    <Text style={styles.text}>{`${history.operation} ${history.result}`}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

export default HistoryDisplay;