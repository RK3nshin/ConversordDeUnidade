import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Icon } from 'react-native-elements';

export default function Index(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bem-Vindo ao Conversor Inteligente</Text>
        <Text style={styles.subtitle}>
          Selecione o tipo de conversão que você deseja realizar:
        </Text>
      </View>
      <View style={styles.Spacer} />

      <View style={styles.buttonContainer}>
        <Button
          title="Converter Comprimento"
          onPress={() => props.navigation.navigate('ConverterComprimento')}
          buttonStyle={styles.button}
          icon={
            <Icon
              name="straighten"
              size={24}
              color="white"
              style={styles.icon}
            />
          }
        />

        <View style={styles.Spacer} />

        <Button
          title="Converter Tempo"
          onPress={() => props.navigation.navigate('ConverterTempo')}
          buttonStyle={styles.button}
          icon={
            <Icon
              name="timer"
              size={24}
              color="white"
              style={styles.icon}
            />
          }
        />

        <View style={styles.Spacer} />

        <Button
          title="Converter Volume"
          onPress={() => props.navigation.navigate('ConverterVolume')}
          buttonStyle={styles.button}
          icon={
            <Icon
              name="local-drink"
              size={24}
              color="white"
              style={styles.icon}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    padding: 10,
  },

  buttonContainer: {
    flexDirection: 'column',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50, // Ajuste o espaçamento entre os botões aqui
    borderRadius: 50,
    width: 250, // Ajuste a largura dos botões conforme necessário
    backgroundColor: 'blue', // Cor de fundo do botão
    padding: 10, // Espaçamento interno do botão
  },
  Spacer: {
    height: 20, // Ajuste a altura do espaçamento entre os botões aqui
  },
  icon: {
    marginRight: 10, // Ajuste o espaçamento entre o ícone e o texto do botão aqui
  },
});
