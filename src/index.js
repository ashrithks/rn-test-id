
export default function testID(id, isConsoleRequired = false, isProduction = true) {
  if (__DEV__ && isConsoleRequired) {
    console.log(`testId is : ${id}`)
  }
  if (isProduction) {
    return {};
  }
  return { accessible: true, accessibilityLabel: id, testID: id }
}