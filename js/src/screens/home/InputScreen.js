import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {navigate} from '../../utils/hooks/useNavigationRef';
import {styles} from './InputScreen.style';
import ActionButton from '../../components/common/buttons/actionButton/ActionButton';
import ButtonsSection from '../../components/screens/buttonsSection/ButtonsSection';
import {useDispatch} from 'react-redux';

export default InputScreen = () => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  const incrementValue = () => {
    if (value < 10) {
      setValue(value + 1);
    }
  };

  const decrementValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handleResetPress = () => {
    setValue(0);
  };

  const handleSubmitPress = () => {
    dispatch({type: 'SUBMIT_DATA', data: value});
  };

  const handleNextPress = () => {
    navigate('DisplayScreen');
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={styles.mainContainer.backgroundColor}
        barStyle="light-content"
      />
      {/* Increment - Decrement */}
      <View style={styles.card}>
        <Text style={styles.text}>{value}</Text>
        <ButtonsSection
          type="operation"
          leftTitle="-"
          rightTitle="+"
          onResetPress={decrementValue}
          onSubmitPress={incrementValue}
        />
      </View>
      <View style={styles.footerContainer}>
        {/* Reset - Submit */}
        <View style={styles.actionsContainer}>
          <ButtonsSection
            leftTitle="Reset"
            rightTitle="Submit"
            onResetPress={handleResetPress}
            onSubmitPress={handleSubmitPress}
          />
        </View>
        {/* Next */}
        <View style={styles.actionsContainer}>
          <ActionButton title="Next" onPress={handleNextPress} />
        </View>
      </View>
    </View>
  );
};
