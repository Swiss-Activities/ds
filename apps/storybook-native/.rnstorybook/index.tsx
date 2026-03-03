import '../global.css'
import React from 'react'
import { Image, Text, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFonts } from 'expo-font'
import { view } from './storybook.requires'

type TextLikeComponent = {
  defaultProps?: {
    style?: unknown
  }
}

function setInterDefaultFont(component: TextLikeComponent) {
  const interStyle = { fontFamily: 'Inter' }
  const existingStyle = component.defaultProps?.style
  const style = Array.isArray(existingStyle)
    ? [interStyle, ...existingStyle]
    : existingStyle == null
      ? [interStyle]
      : [interStyle, existingStyle]

  component.defaultProps = {
    ...component.defaultProps,
    style,
  }
}

setInterDefaultFont(Text as unknown as TextLikeComponent)
setInterDefaultFont(TextInput as unknown as TextLikeComponent)

const brandLogo = (
  <Image
    source={require('../assets/brand.png')}
    style={{ width: 150, height: 30 }}
    resizeMode="contain"
  />
)

const StorybookUIRoot = view.getStorybookUI({
  storage: {
    getItem: AsyncStorage.getItem,
    setItem: AsyncStorage.setItem,
  },
  theme: {
    brand: {
      title: 'Design System',
      image: brandLogo,
    },
  },
})

export default function StorybookRoot() {
  const [fontsLoaded] = useFonts({
    Inter: require('../assets/fonts/inter-v11-latin-regular.ttf'),
    'Inter-Medium': require('../assets/fonts/inter-v11-latin-500.ttf'),
    'Inter-SemiBold': require('../assets/fonts/inter-v11-latin-600.ttf'),
    'Inter-Bold': require('../assets/fonts/inter-v11-latin-700.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  return <StorybookUIRoot />
}
