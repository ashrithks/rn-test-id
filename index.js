
export default function testID(id, isConsoleRequired = false) {
  if (__DEV__ && isConsoleRequired) {
    console.log(`testId is : ${id}`)
  }
  return { accessible: true, accessibilityLabel: id, testID: id }
}