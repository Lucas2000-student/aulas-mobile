import { AuthForm } from "@/components/AuthForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useAuth } from "@/hooks/useAuth";
import { View } from "react-native";
import MapView from 'react-native-maps'
import * as batata from 'expo-location'
import { useEffect, useState } from "react";

export default function Home() {
    const { email, setEmail, password, setPassword, login, signUp } = useAuth();
    const [location, setLotation] = useState<batata.LocationObjectCoords>()

    const getPermission = async() => {
        const { status } = await batata.requestBackgroundPermissionsAsync()
        if(status !== 'granted') return false
        return true
    }

    const getPosition = async() => {
        const { coords } = await batata.getCurrentPositionAsync()
        setLotation(coords)
    }

    const setup = async() =>{
        const isAllowed =  await getPermission()
        if(isAllowed) return getPosition()
    }

    useEffect(() => 
        {
            setup()
        }
        ,[])

    if (location == undefined) return <View/>

    return (
        <View style = {{flex: 1}}>
            <MapView style = {{flex: 1}}
                initialRegion={
                    {
                        latitude: location?.latitude,
                        longitude:location?.longitude,
                        latitudeDelta:0.01,
                        longitudeDelta:0.01
                    }
                }/>
            <Header />
            <AuthForm
                email={email}
                password={password}
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onLogin={login}
                onSignUp={signUp}
            />
            <Footer />
        </View>
    );
}