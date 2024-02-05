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
    backgroundColor: Colors.cardColor,
    borderRadius: 20,
    marginVertical: 20,
    paddingVertical: 30,
  },
  text: {
    alignSelf: 'center',
    fontSize: Font.title.size.XXXL,
    fontWeight: Font.weight.regular,
    color: Colors.title,
    marginTop: 20,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  actionsContainer: {
    minWidth: 300,
    minHeight: 50,
    marginVertical: 20,
  },
});
