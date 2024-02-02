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
    backgroundColor: Colors.actionBarIcons,
    borderRadius: 24,
    weight: 80,
    height: 100,
    padding: 12,
  },
  text: {
    fontSize: Font.title.size.XXL,
    fontWeight: Font.weight.regular,
    color: Colors.gris1,
    marginHorizontal: 12,
  },
});
