import {StyleSheet} from 'react-native';
import Font from '../../utils/theme/Font';
import Colors from '../../utils/theme/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 16,
  },
  card: {
    alignItems: 'center',
    width: 300,
    height: 300,
    backgroundColor: Colors.cardColor,
    borderRadius: 20,
    marginVertical: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: Font.title.size.XL,
    fontWeight: Font.weight.regular,
    color: Colors.title,
    margin: 20,
    textAlign: 'center',
  },
  dataValue: {
    fontSize: Font.title.size.XXXL,
    fontWeight: Font.weight.regular,
    color: Colors.title,
    marginVertical: 20,
  },
  actionsContainer: {
    minWidth: 360,
    minHeight: 50,
    marginVertical: 20,
  },
});
