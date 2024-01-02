import React, {useState} from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackPramslist } from '../../routes/app.routes'
import { api } from '../../services/api';

export default function Dashboard() {

  const navigation = useNavigation<NativeStackNavigationProp<StackPramslist>>();

  const [number, setNumber] = useState('');

  async function openOrder(){
    if(number === ''){
      return;
    }
    const response = await api.post('/order',{
      table: Number(number)
    })
    //console.log(response.data)

    navigation.navigate('Order', {number: number, order_id: response.data.id})

    setNumber('');

  }

  //const {signOut} = useContext(AuthContext)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput style={styles.input}
      placeholder="Numero da mesa"
      placeholderTextColor="#f0f0f0"
      keyboardType="numeric"
      value={number}
      onChangeText={setNumber}
      />
      <TouchableOpacity style={styles.button} onPress={openOrder}>
        <Text style={styles.buttonText}>Abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#1d1d2e'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  input: {
    width: '90%',
    height: 60,
    backgroundColor: '#101026',
    borderRadius: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    fontSize: 22,
    color: '#fff',
  },
  button: {
    width: '90%',
    height: 40,
    backgroundColor: '#3fffa3',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#101026'
  }
})

