import React from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm } from './hooks/useForm';
function validarLogin(v) {
  const e = {};
  if (!v.email.includes('@')) e.email = 'E-mail inválido';
  if (v.senha.length < 6) e.senha = 'Mínimo de 6 caracteres';
  return e;
}
function fazerLogin(v) {
  Alert.alert('Sucesso', `Bem-vindo, ${v.email}`);
}
export default function Login() {
  const { valores, erros, alterar, enviar, limpar } = useForm({ email: '', senha: '' }, validarLogin);
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput style={styles.campo} placeholder="E-mail" autoCapitalize="none"
        keyboardType="email-address" value={valores.email} onChangeText={t => alterar('email', t)} />
      {erros.email ? <Text style={styles.erro}>{erros.email}</Text> : null}
      <TextInput style={styles.campo} placeholder="Senha" secureTextEntry
        value={valores.senha} onChangeText={t => alterar('senha', t)} />
      {erros.senha ? <Text style={styles.erro}>{erros.senha}</Text> : null}
      <Button title="Entrar" onPress={() => enviar(fazerLogin)} />
      <Button title="Limpar" color="#777" onPress={limpar} />
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, gap: 8 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 },
  campo: { borderWidth: 1, borderColor: '#999', borderRadius: 8, padding: 10 },
  erro: { color: 'red' },
});
