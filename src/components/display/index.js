import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const Display = props => {

    const { firstNumber, operator, value, lastOperation } = props;

    return (
        <View style={styles.root}>
            <Text numberOfLines={1} >{operator ? (
                `${firstNumber} ${operator}`
            ) : (
                lastOperation?.visible && (lastOperation.operation)
            )}</Text>
            <Text numberOfLines={1} style={styles.text}>{value}</Text>
        </View>
    )
}

export default Display