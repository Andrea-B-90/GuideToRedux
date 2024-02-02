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
    backgroundColor: Colors.gris2,
    borderRadius: 24,
    padding: 12,
  },
  text: {
    fontSize: Font.title.size.S,
    fontWeight: Font.weight.regular,
    color: Colors.gris5,
    marginHorizontal: 12,
  },
});
