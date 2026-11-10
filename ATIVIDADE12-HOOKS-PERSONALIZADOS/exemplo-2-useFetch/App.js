import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { useFetch } from './hooks/useFetch';
function Posts() {
  const { dados, carregando, erro } = useFetch('/posts');
  if (carregando) return <ActivityIndicator />;
  if (erro) return <Text style={styles.erro}>{erro}</Text>;
  return <Text style={styles.texto}>{dados.length} posts carregados</Text>;
}
function Usuarios() {
  const { dados, carregando, erro } = useFetch('/usuarios');
  if (carregando) return <ActivityIndicator />;
  if (erro) return <Text style={styles.erro}>{erro}</Text>;
  return dados.map(u => <Text key={u.id} style={styles.texto}>{u.nome}</Text>);
}
function Inexistente() {
  const { carregando, erro } = useFetch('/nada');
  if (carregando) return <ActivityIndicator />;
  return <Text style={styles.erro}>{erro}</Text>;
}
export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Posts</Text>
      <Posts />
      <Text style={styles.titulo}>Usuários</Text>
      <Usuarios />
      <Text style={styles.titulo}>Endereço errado</Text>
      <Inexistente />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: 'center', padding: 20, gap: 4 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginTop: 12 },
  texto: { fontSize: 18 },
  erro: { fontSize: 18, color: 'red' },
});
