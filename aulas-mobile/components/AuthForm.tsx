import { Button, TextInput } from "react-native";

type Props = {
    email: string;
    password: string;
    onChangeEmail: (text: string) => void;
    onChangePassword: (text: string) => void;
    onLogin: () => void;
    onSignUp: () => void;
}

export function AuthForm({ email, password, onChangeEmail, onChangePassword, onLogin, onSignUp }: Props) {
    return (
        <>
            <TextInput placeholder='Digite seu E-mail' onChangeText={onChangeEmail} value={email} />
            <TextInput placeholder='Digite sua senha' secureTextEntry onChangeText={onChangePassword} value={password} />
            <Button title='Login' onPress={onLogin} />
            <Button title='Cadastrar' onPress={onSignUp} />
        </>
    );
}