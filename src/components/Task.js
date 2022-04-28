import React from 'react';
import {View, Text} from 'react-native';
import styles from "../../styles/taskstyle";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.itemRight}></View>
    </View>
  );
};





export default Task;
