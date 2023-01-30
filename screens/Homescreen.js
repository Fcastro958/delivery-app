import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Homescreen() {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setPotionalOptions({
            HeaderTitle: 'Home', 
        })
    }, [])


  return (
    <View>
      <Text className='text-red-500' >Homescreen</Text>
    </View>
  )
}