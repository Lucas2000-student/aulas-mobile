import { Slot, useRouter } from 'expo-router'
import { Button, SafeAreaView, View } from 'react-native'

export default function Layout() {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Button title='Voltar' onPress={() => router.back()} />
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </SafeAreaView>
  )
}