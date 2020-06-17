
export default function testID(id, isConsoleRequired = false) {
  if (__DEV__ && isConsoleRequired) {
    console.log(`testId is : ${id}`)
  }
  if (__DEV__) {
    return { accessible: true, accessibilityLabel: id, testID: id }
  }
  return {}
}