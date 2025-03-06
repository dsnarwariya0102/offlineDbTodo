import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  addTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#007BFF',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconButton: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  spacer: {
    width: 50, // Keeps spacing consistent
  },
});
