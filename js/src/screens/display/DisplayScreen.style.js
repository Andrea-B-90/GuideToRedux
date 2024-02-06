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
    backgroundColor: Colors.card,
    borderRadius: 20,
    marginVertical: 20,
    paddingVertical: 30,
  },
  text: {
    fontSize: Font.text.size.M,
    fontWeight: Font.weight.regular,
    color: Colors.text,
    margin: 20,
    textAlign: 'center',
  },
  dataValue: {
    fontSize: Font.text.size.XL,
    fontWeight: Font.weight.bold,
    color: Colors.text,
    marginVertical: 20,
  },
  actionsContainer: {
    minWidth: 360,
    minHeight: 50,
    marginVertical: 20,
  },
});
