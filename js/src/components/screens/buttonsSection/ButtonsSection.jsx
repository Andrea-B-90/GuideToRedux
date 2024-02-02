import React from 'react';
import {View} from 'react-native';
import {styles} from './ButtonsSection.style';
import OperationButton from '../../common/buttons/operationButton/OperationButton';
import ActionButton from '../../common/buttons/actionButton/ActionButton';

export default ButtonsSection = React.memo(function ButtonsSection(props) {
  return (
    <View style={styles.container}>
      {props.type === 'operation' ? (
        <>
          <OperationButton
            title={props.leftTitle}
            onPress={props.onResetPress}
          />
          <OperationButton
            title={props.rightTitle}
            onPress={props.onSubmitPress}
          />
        </>
      ) : (
        <>
          <ActionButton title={props.leftTitle} onPress={props.onResetPress} />
          <ActionButton
            title={props.rightTitle}
            onPress={props.onSubmitPress}
          />
        </>
      )}
    </View>
  );
});
