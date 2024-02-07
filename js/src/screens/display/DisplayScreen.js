import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './DisplayScreen.style';
import ButtonsSection from '../../components/screens/buttonsSection/ButtonsSection';
import Colors from '../../utils/theme/Colors';
import Font from '../../utils/theme/Font';
import {useDispatch, useSelector} from 'react-redux';
import {setCounterValue} from '../../redux/slices/counterSlice';

export default DisplayScreen = () => {
  const defaultString = 'Press Retrieve to get the counter value.';
  const [value, setValue] = useState(defaultString);
  const [showData, setShowData] = useState(false);

  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleRetrievePress = () => {
    setValue(counter);
    setShowData(true);
  };

  const handleResetPress = () => {
    setValue(defaultString);
    setShowData(false);
    dispatch(setCounterValue(0));
  };

  return (
    <View style={styles.container}>
      {/* Data Value */}
      <View style={styles.card}>
        <Text style={styles.text}>Counter value:</Text>
        {showData === true ? (
          <Text style={styles.dataValue}>{value}</Text>
        ) : (
          <Text style={styles.text}>
            Press{' '}
            <Text
              style={[
                styles.text,
                {
                  fontWeight: Font.weight.semibold,
                  color: Colors.operationBackground,
                },
              ]}>
              'Retrieve'
            </Text>{' '}
            to get the counter value.
          </Text>
        )}
      </View>
      {/* Reset - Retrieve */}
      <View style={styles.actionsContainer}>
        <ButtonsSection
          leftTitle="Redux Reset"
          rightTitle="Retrieve"
          onResetPress={handleResetPress}
          onSubmitPress={handleRetrievePress}
        />
      </View>
    </View>
  );
};
