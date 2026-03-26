import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Login(){
    const navegar = useRouter();
    const { token } = useLocalSearchParams();

    return(
        <View style={{}}>
            <Header/>
            <Button title="Adicionar notas" onPress={() => navegar.push({pathname: "/pages/addNotes", params: { token }})}/>
            <Button title="Verificar Notas" onPress={() => navegar.push({pathname: "/pages/verifyNotes", params: { token }})}/>
            <Footer/>
        </View>
    )
}