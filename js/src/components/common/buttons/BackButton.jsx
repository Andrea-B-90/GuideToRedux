import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './BackButton.style';
import Icons from '../../../utils/theme/Icons';

export default BackButton = React.memo(function BackButton(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Icons.Feather
          name="arrow-left"
          style={[styles.featherIcon]}
          color={props.color}
        />
        <Text numberOfLines={1} style={[styles.text]}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});
