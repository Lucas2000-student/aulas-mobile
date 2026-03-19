import { View, StyleSheet, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";


export default function AddNotes(){
    const navegar = useRouter();

    return(
        <View style={ styles.container }>
            <TextInput style={ styles.input } placeholder='Digite nota CP01: '/>
            <TextInput style={ styles.input } placeholder='Digite nota CP02: '/>
            <TextInput style={ styles.input } placeholder='Digite nota CP03: '/>
            <Button title="Salvar" onPress={() => navegar.push("/login")}/>
            <Button title="voltar" onPress={() => navegar.push("/login")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
    input: { borderWidth: 2, borderColor: '#3d6da4', borderRadius: 16, height: 36 }
})