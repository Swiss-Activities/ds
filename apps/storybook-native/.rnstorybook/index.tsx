import '../global.css'
import React from 'react'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { view } from './storybook.requires'

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
    preferredColorScheme: 'light',
    brand: {
      title: 'Design System',
      image: brandLogo,
    },
  },
})

export default StorybookUIRoot
