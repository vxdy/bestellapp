import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type {Node} from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform, ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Task from "./src/components/Task";
import styles from "./styles/appstyle-portrait";


const App: () => Node = () => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
    const [BTCData, setBTCData] = useState();

    useEffect(() => {
        getData();
        getCurrentBTC();
        setInterval(() => {
            getCurrentBTC();
        }, 5000);
    }, [])

    const showConfirmDialog = (index) => {
        return Alert.alert(
            "Löschen",
            "Willst du diese Bestellung wirklich löschen?",
            [
                {
                    text: "Ja",
                    onPress: () => {
                        completeTask(index)
                    },
                },
                {
                    text: "Nein",
                },
            ]
        );
    };

    const handleAddTask = () => {
        Keyboard.dismiss();
        const newTaskItems = [...taskItems, task]
        setTaskItems(newTaskItems);
        setTask(null);
        console.log(task)
        console.log(BTCData)
        saveData(newTaskItems).then(r => console.log(r))
    };


    const getCurrentBTC = async () => {
        try {
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            const json = await response.json();
            const JSONData = json["bpi"]["EUR"].rate;
            const BTCPrice = parseFloat(JSONData.replace(',', ''))
            setBTCData(BTCPrice.toFixed(2));
        } catch (error) {
            console.error(error);
        }
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
        saveData(itemsCopy).then(r => console.log(r))
    }

    const getData = async () => {
        try {
            let jsonValue = await AsyncStorage.getItem('@storage_Key')
            if (jsonValue != null) {
                setTaskItems(JSON.parse(jsonValue))
            }
        } catch (e) {
            setTaskItems([])
            alert('Failed to read Data from Storage')
        }
    }

    const saveData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            alert('Failed to save the data to the storage')
        }
    }


    return (<View style={styles.container}>
        <View style={styles.tasksWrapper}>
            <View style={styles.headerContainer}>
                <Text style={styles.sectionTitle}>
                    Bestellungen
                </Text>
                <Text style={styles.btcprice}>Aktueller Bitcoin Kurs: {BTCData}€</Text>
            </View>

            <ScrollView style={styles.scrollContainer}>
                {taskItems.map((item, index) => {
                    return (<TouchableOpacity key={index} onPress={() => showConfirmDialog(index)}>
                        <Task text={item}/>
                    </TouchableOpacity>)

                })}
            </ScrollView>
        </View>


        <KeyboardAvoidingView
            style={styles.writeTaskWrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TextInput style={styles.input} value={task} placeholder="Schreibe die Bestellung" placeholderTextColor="#C0C0C0"
                       onChangeText={text => setTask(text)}/>
            <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    </View>);
};


export default App;
