import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Login(){
    const navegar = useRouter();
    
    return(
        <View style={ styles.container }>
            <Button title="Adicionar notas" onPress={() => navegar.push({pathname: "/addNotes"})}/>
            <Button title="Verificar Notas" onPress={() => navegar.push({pathname: "/verifyNotes"})}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
    input: { borderWidth: 2, borderColor: '#3d6da4', borderRadius: 16, height: 36 }
})