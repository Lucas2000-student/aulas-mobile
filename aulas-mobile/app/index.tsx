import { auth, firestore } from "../services/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import { collection, getDocs } from 'firebase/firestore';

import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [scores, setScores] = useState('');
 
    const navegar = useRouter();

    const login = async () => {

        if (!email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const credential = await signInWithEmailAndPassword(auth, email, password)
            const token = await credential.user.getIdToken()
            alert(`Usuário logado: ${email}`)
            navegar.push({
                pathname: "/login",
                params: { token: token }
            })
        } catch (error: any) {
            alert(`Usuário não logado`)
            console.log(error)
        }
    }

    const signUp = async () => {

        if (!email || !password) {
            alert("Preencha todos os campos!");
            return;
        }

        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password)
            alert(`Usuário Cadastrado: ${email}`)
            const token = await credential.user.getIdToken()
            console.log(token)
        } catch (error: any) {
            alert(`Usuário não Cadastrado`)
            console.log(error)
        }
    }

    const getScore = async () => {
        const snapshot = await getDocs(collection(firestore, 'scores'));
        snapshot.forEach(doc => {
        setScores(doc.data().value);
        });
    }
 
    return (
        <View style={ styles.container }>
            <TextInput style={ styles.input } placeholder='Digite seu E-mail' onChangeText={(text) => setEmail(text)}/>
            <TextInput style={ styles.input } secureTextEntry placeholder='Digite sua senha' onChangeText={(text) => setPassword(text)}/>
            <Button title='Login' onPress={login}/>
            <Button title='Cadastrar' onPress={signUp}/>
            <Text>{scores}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16, gap: 16 },
    input: { borderWidth: 2, borderColor: '#3d6da4', borderRadius: 16, height: 36 }
})