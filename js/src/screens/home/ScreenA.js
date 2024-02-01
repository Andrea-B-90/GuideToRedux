import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {navigate} from '../../utils/hooks/useNavigationRef';

export default ScreenA = () => {
  const [inputData, setInputData] = useState('');

  const handleButtonPress = () => {
    // Navigate to ScreenB
    navigate('ScreenB');
  };

  return (
    <View>
      <Text>Screen A</Text>
      <TextInput
        placeholder="Enter data"
        value={inputData}
        onChangeText={text => setInputData(text)}
      />
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};
