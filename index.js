import { Platform } from 'react-native';

export default function testID(id, isConsoleRequired = false) {
  if (__DEV__ && isConsoleRequired) {
    console.log(`testId is : ${id}`)
  }
  return Platform.OS === 'android' ?
    { accessible: true, accessibilityLabel: id } :
    { testID: id };
}