import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/theme/Colors';
import Font from '../../../../utils/theme/Font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.operationBackground,
    borderRadius: 24,
    height: 100,
    padding: 12,
  },
  text: {
    fontSize: Font.text.size.L,
    fontWeight: Font.weight.regular,
    color: Colors.operationText,
    marginHorizontal: 12,
  },
});
