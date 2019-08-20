import React from 'react';

// a View é como se fosse a nossa div no html
import { View, StyleSheet, Image, TextInput } from 'react-native';

// há varios tamanhos da imagem logo, mas o próprio React vai chamar o melhor tamanho de acordo com a resolução do dispositivo movel
import logo from '../assets/logo.png'; // precisa ser .png

// exportando uma função chamada Login (escolhida ao acaso) que vai retorna o conteudo abaixo
export default function Login() {
    return (
        // estilizando a View - "body"
        <View style={styles.container}>
            <Image source={logo} />

            <TextInput="Digite seu usuário no Github"
            style={styles.input}
            />
        </View>
    );
}
// estilizando o conteudo do container
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
});