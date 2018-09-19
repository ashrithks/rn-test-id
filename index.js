import { Platform } from 'react-native';

export default function testID(id) {
  if(__DEV__){
    console.log(`testId is : ${id}`)
  }
  return Platform.OS === 'android' ?
    { accessible: true, accessibilityLabel: id } :
    { testID: id };
}