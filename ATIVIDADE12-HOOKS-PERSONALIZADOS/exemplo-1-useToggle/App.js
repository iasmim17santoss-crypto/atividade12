import React from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import { useToggle } from './hooks/useToggle';

export default function Configuracoes() {
  const [notificacoes, alternarNotificacoes] = useToggle(true);
  const [modoAviao, alternarModoAviao] = useToggle();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <View style={styles.linha}>
        <Text style={styles.texto}>Notificações: {notificacoes ? 'ON' : 'OFF'}</Text>
        <Switch value={notificacoes} onValueChange={alternarNotificacoes} />
      </View>
      <View style={styles.linha}>
        <Text style={styles.texto}>Modo avião: {modoAviao ? 'ON' : 'OFF'}</Text>
        <Switch value={modoAviao} onValueChange={alternarModoAviao} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 18, textAlign: 'center' },
  linha: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12 },
  texto: { fontSize: 18 },
});
