import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './DisplayScreen.style';
import ButtonsSection from '../../components/screens/buttonsSection/ButtonsSection';
import Colors from '../../utils/theme/Colors';
import Font from '../../utils/theme/Font';
import {useDispatch, useSelector} from 'react-redux';
import {
  calculateFactorial,
  setCounterValue,
} from '../../redux/slices/counterSlice';

export default DisplayScreen = () => {
  const [showFactorial, setShowFactorial] = useState(false);

  const counter = useSelector(state => state.counter.counterValue);
  const factorial = useSelector(state => state.counter.factorialValue);
  const dispatch = useDispatch();

  const handleFactorialPress = () => {
    dispatch(calculateFactorial());
    setShowFactorial(true);
  };

  const handleResetPress = () => {
    dispatch(setCounterValue(0));
    setShowFactorial(false);
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        {/* Counter Value */}
        <View style={styles.card}>
          <Text style={styles.text}>Counter value:</Text>
          <Text style={styles.dataValue}>{counter}</Text>
        </View>
        {/* Reset - Factorial */}
        <View style={styles.actionsContainer}>
          <ButtonsSection
            leftTitle="Redux Reset"
            rightTitle="Factorial"
            onResetPress={handleResetPress}
            onSubmitPress={handleFactorialPress}
          />
        </View>
        {/* Factorial Value */}
        <View style={styles.card}>
          {showFactorial === true ? (
            <>
              <Text style={styles.text}>Factorial value:</Text>
              <Text style={styles.dataValue}>{factorial}</Text>
            </>
          ) : (
            <>
              {/* Default String */}
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
                  'Factorial'
                </Text>{' '}
                to calculate the counter's factorial value.
              </Text>
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
