
export default function testID(id, isConsoleRequired = false) {
  if (__DEV__ && isConsoleRequired) {
    console.log(`testId is : ${id}`)
  }
  if (global.isProduction) {
    return {};
  }
  return { accessible: true, accessibilityLabel: id, testID: id }
}