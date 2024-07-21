import { View, Text, Button, TextInput ,StyleSheet} from 'react-native';
import { useUnidade } from './contexts/contextsUnidade'; 
import { Picker } from '@react-native-picker/picker';
import React, { useEffect } from 'react';


const unidadesDistancia = [
  { nome: 'Metro', abreviacao: 'm' },
  { nome: 'Centímetro', abreviacao: 'cm' },
  { nome: 'Quilômetro', abreviacao: 'km' },
];

export default function ConverterComprimento({ navigation }) {
  const { unidadeOrigem, setUnidadeOrigem, unidadeDestino, setUnidadeDestino, resultado, setResultado,Tipo,setTipo } = useUnidade();
  const [valorEntrada, setValorEntrada] = React.useState('');
  useEffect(() => {
    setUnidadeOrigem('cm');
    setUnidadeDestino('m');
    setTipo('1');
  }, []);
  const handleConversion = () => {
    const valor = parseFloat(valorEntrada);

    if (!isNaN(valor)) {
      navigation.navigate('Resultado', { Tipo, valor,unidadeOrigem, unidadeDestino });
    }

    
  };


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione as unidades:</Text>
      <Picker
        style={styles.picker}
        selectedValue={unidadeOrigem}
        onValueChange={(itemValue) => setUnidadeOrigem(itemValue)}>
        {unidadesDistancia.map((unidade) => (
          <Picker.Item key={unidade.abreviacao} label={unidade.nome} value={unidade.abreviacao} />
        ))}
      </Picker>
      <Picker
        style={styles.picker}
        selectedValue={unidadeDestino}
        onValueChange={(itemValue) => setUnidadeDestino(itemValue)}>
        {unidadesDistancia.map((unidade) => (
          <Picker.Item key={unidade.abreviacao} label={unidade.nome} value={unidade.abreviacao} />
        ))}
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        keyboardType="numeric"
        onChangeText={(text) => setValorEntrada(text)}
      />
      <Button title="Calcular" onPress={handleConversion} />
      {resultado !== null && <Text style={styles.result}>Resultado: {resultado} {unidadeDestino}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  picker: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 16,
  },
});