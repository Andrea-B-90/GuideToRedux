import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './ScreenB.style';
import ButtonsSection from '../../components/screens/buttonsSection/ButtonsSection';
import Colors from '../../utils/theme/Colors';
import Font from '../../utils/theme/Font';

export default ScreenB = () => {
  const [showData, setShowData] = useState(null);

  const data = 0;

  const handleResetPress = () => {
    // TODO: implement reset value in Redux
  };

  const handleRetrievePress = () => {
    // TODO: implement get value from Redux
  };

  return (
    <View style={styles.container}>
      {/* Data Value */}
      <View style={styles.card}>
        <Text style={styles.text}>Data:</Text>
        {showData ? (
          <Text style={styles.dataValue}>{data}</Text>
        ) : (
          <Text style={styles.text}>
            Press{' '}
            <Text
              style={[
                styles.text,
                {
                  fontWeight: Font.weight.semibold,
                  color: Colors.actionBarIcons,
                },
              ]}>
              'Retrieve'
            </Text>{' '}
            to get the data.
          </Text>
        )}
      </View>
      {/* Reset - Retrieve */}
      <View style={styles.actionsContainer}>
        <ButtonsSection
          leftTitle="Reset"
          rightTitle="Retrieve"
          onResetPress={handleResetPress}
          onSubmitPress={handleRetrievePress}
        />
      </View>
    </View>
  );
};
