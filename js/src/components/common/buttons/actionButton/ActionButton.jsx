import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './ActionButton.style';

export default ActionButton = React.memo(function ActionButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1} style={styles.text}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});
