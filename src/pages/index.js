import React from "react";
import { View, Text } from "react-native";

import styles from './styles'

import Calculator from "../components/calculator";

const HomePage = () => {

    return (
        <View style={styles.root}>
            <Calculator />
        </View>
    )
}

export default HomePage;