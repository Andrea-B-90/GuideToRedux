import {StyleSheet} from 'react-native';
import Colors from '../../../../utils/theme/Colors';
import Font from '../../../../utils/theme/Font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: Font.text.size.S,
    fontWeight: Font.weight.regular,
    color: Colors.text,
    marginEnd: 20,
  },
  featherIcon: {
    fontSize: 26,
    paddingRight: 15,
    color: Colors.text,
  },
});
