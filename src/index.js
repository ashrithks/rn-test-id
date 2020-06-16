
export default function testID(id, accessible = false, isConsoleRequired = false) {
  if (__DEV__ && isConsoleRequired) {
    console.log(`testId is : ${id}`)
  }
  if (__DEV__ && accessible) {
    return { accessible: true, accessibilityLabel: id, testID: id }
  }
  else if (__DEV__) {
    return { testID: id }
  }
  return {}
}