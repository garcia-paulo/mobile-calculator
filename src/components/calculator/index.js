import React, { useState } from "react";
import { View } from "react-native";

import styles from "./styles";

import HistoryDisplay from "../historyDisplay";
import Display from '../display'
import Button from "../button";

const Calculator = () => {

    const [displayValue, setDisplayValue] = useState();
    const [firstNumber, setFirstNumber] = useState();
    const [operator, setOperator] = useState();
    const [history, setHistory] = useState([]);
    const [lastOperation, setLastOperation] = useState();

    const saveResult = (operation, result) => {
        setLastOperation({
            operation: `${operation} =`,
            result: result,
            visible: true
        })
    }

    const pushToHistory = () => {
        let array = history;
        array.push(lastOperation);
        setHistory(array);
        setLastOperation(null);
    }

    const digitToCalc = digit => {
        if (displayValue) {
            setDisplayValue(displayValue + digit);
        } else {
            setDisplayValue(digit)
        }
    }

    const operatorToCalc = thisOperator => {
        if (!operator) {
            const number = parseFloat(displayValue);
            if (number) {
                setOperator(thisOperator);
                setFirstNumber(number);
            }
            setDisplayValue(null);
            return;
        }
        if (operator === thisOperator && displayValue) {
            const number = parseFloat(displayValue)
            if (number) {
                calculate(number);
                return;
            }
            setDisplayValue(null);
            return;
        }
        setOperator(thisOperator);
    }

    const minusOperation = value => {
        if (!displayValue) {
            setDisplayValue('-');
            return;
        }
        operatorToCalc('-');
    }

    const calculate = secondNumber => {
        let result;
        switch (operator) {
            case '/':
                result = firstNumber / secondNumber;
                setDisplayValue(result)
                break;
            case '*':
                result = firstNumber * secondNumber;
                setDisplayValue(result)
                break;
            case '-':
                result = firstNumber - secondNumber;
                setDisplayValue(result)
                break;
            case '+':
                result = firstNumber + secondNumber;
                setDisplayValue(result)
                break;
        }
        if (lastOperation?.operation) {
            pushToHistory();
        }
        saveResult(`${firstNumber} ${operator} ${secondNumber}`, result)
        setFirstNumber(null);
        setOperator(null);
    }

    const clean = value => {
        if (lastOperation?.operation) {
            pushToHistory();
        }
        setDisplayValue(null);
        setFirstNumber(null);
        setOperator(null);
    }

    const setResult = result => {
        setLastOperation({ ...lastOperation, visible: false })
        setDisplayValue(result);
    }

    return (
        <View style={styles.root}>
            <HistoryDisplay history={history} onClick={setResult} />
            <Display value={displayValue} firstNumber={firstNumber}
                operator={operator} lastOperation={lastOperation} />
            <View style={styles.keys}>
                <Button label='1' onClick={digitToCalc} />
                <Button label='2' onClick={digitToCalc} />
                <Button label='3' onClick={digitToCalc} />
                <Button label='/' onClick={operatorToCalc} />
                <Button label='4' onClick={digitToCalc} />
                <Button label='5' onClick={digitToCalc} />
                <Button label='6' onClick={digitToCalc} />
                <Button label='*' onClick={operatorToCalc} />
                <Button label='7' onClick={digitToCalc} />
                <Button label='8' onClick={digitToCalc} />
                <Button label='9' onClick={digitToCalc} />
                <Button label='-' onClick={minusOperation} />
                <Button label='.' onClick={digitToCalc} />
                <Button label='0' onClick={digitToCalc} />
                <Button label='C' onClick={clean} />
                <Button label='+' onClick={operatorToCalc} />
            </View>
        </View>
    )
}

export default Calculator;