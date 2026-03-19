import { View, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";


export default function VerifyNotes(){
    const navegar = useRouter();

    return(
        <View style={ styles.container }>

            <Button title="voltar" onPress={() => navegar.push("/login")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
    input: { borderWidth: 2, borderColor: '#3d6da4', borderRadius: 16, height: 36 }
})