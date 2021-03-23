
# react-native-test-id

## Getting started

`$ npm install rn-test-id --save`

A convenient way to set test id for React-Native components

## Usage
```js
import React from 'react'
import { View, Text } from 'react-native'
import testID from 'rn-test-id'

function SuperComponent({ testId }) {
  return (
    <View {...testID(testId,false)}>
      <Text>My Super Component</Text>
    </View>
  )
}
```
  
