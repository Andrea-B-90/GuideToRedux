import {StyleSheet} from 'react-native';
import Font from '../../utils/theme/Font';
import Colors from '../../utils/theme/Colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 16,
  },
  card: {
    minWidth: 300,
    minHeight: 300,
    backgroundColor: Colors.card,
    borderRadius: 20,
    marginVertical: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text: {
    alignSelf: 'center',
    fontSize: Font.text.size.XL,
    fontWeight: Font.weight.bold,
    color: Colors.text,
    marginTop: 20,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  actionsContainer: {
    minWidth: 360,
    minHeight: 50,
    marginVertical: 20,
  },
});
