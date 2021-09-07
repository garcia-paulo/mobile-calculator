import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Button = props => {

    return (
        <TouchableOpacity onPress={() => props.onClick(props.label)}>
            <Text style={styles.root}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Button;