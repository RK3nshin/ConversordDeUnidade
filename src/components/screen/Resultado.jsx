import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default function Resultado({route, navigation}) {
  const {Tipo, valor, unidadeOrigem, unidadeDestino} = route.params;
  const [valorEntrada, setValorEntrada] = useState(valor); 
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    if (!valorEntrada) {
      return;
    }

    let resultadoCalculado = 0;
    if (unidadeOrigem === unidadeDestino) {
      resultadoCalculado = parseFloat(valorEntrada);
    } else if (Tipo === '1') {
      if (unidadeOrigem === 'm' && unidadeDestino === 'cm') {
        resultadoCalculado = parseFloat(valorEntrada) * 100; 
      } else if (unidadeOrigem === 'cm' && unidadeDestino === 'm') {
        resultadoCalculado = parseFloat(valorEntrada) / 100; 
      } else if (unidadeOrigem === 'cm' && unidadeDestino === 'km') {
        resultadoCalculado = parseFloat(valorEntrada) / 100000;
      } else if (unidadeOrigem === 'm' && unidadeDestino === 'km') {
        resultadoCalculado = parseFloat(valorEntrada) / 1000; 
      } else if (unidadeOrigem === 'km' && unidadeDestino === 'm') {
        resultadoCalculado = parseFloat(valorEntrada) * 1000; 
      }
    } else if (Tipo === '2') {
      if (unidadeOrigem === 's' && unidadeDestino === 'min') {
        resultadoCalculado = valor / 60;
      } else if (unidadeOrigem === 'min' && unidadeDestino === 's') {
        resultadoCalculado = valor * 60;
      } else if (unidadeOrigem === 'min' && unidadeDestino === 'h') {
        resultadoCalculado = valor / 60;
      } else if (unidadeOrigem === 'h' && unidadeDestino === 'min') {
        resultadoCalculado = valor * 60; 
      } else if (unidadeOrigem === 's' && unidadeDestino === 'h') {
        resultadoCalculado = valor / 3600;
      } else if (unidadeOrigem === 'h' && unidadeDestino === 's') {
        resultadoCalculado = valor * 3600;
      }
    } else if (Tipo === '3') {
      if (unidadeOrigem === 'L' && unidadeDestino === 'mL') {
        resultadoCalculado = valor * 1000; 
      } else if (unidadeOrigem === 'mL' && unidadeDestino === 'L') {
        resultadoCalculado = valor / 1000; 
      } else if (unidadeOrigem === 'L' && unidadeDestino === 'gal') {
        resultadoCalculado = valor * 0.264172; 
      } else if (unidadeOrigem === 'gal' && unidadeDestino === 'L') {
        resultadoCalculado = valor / 0.264172; 
      }
    }

    setResultado(resultadoCalculado.toFixed(2));
  }, [Tipo, unidadeOrigem, unidadeDestino, valorEntrada]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unidade de Origem: {unidadeOrigem}</Text>
      <Text style={styles.text}>Unidade de Destino: {unidadeDestino}</Text>
      <Text style={styles.text}>Valor de Entrada:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        onChangeText={text => setValorEntrada(text)}
        value={valorEntrada.toString()}  
      />
      {resultado !== null && (
        <Text style={styles.text}>Resultado: {resultado}</Text>
      )}
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
