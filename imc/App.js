import React, { useState } from 'react'
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import styles from './assets/css/styles'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  function validate() {
    if (weight <= 0) {
      Alert.alert('Opa!', 'Informe um peso maior que 0 (zero).')
      return false
    }
    if (height <= 0) {
      Alert.alert('Opa!', 'Informe uma altura maior que 0 (zero).')
      return false
    }
    return true
  }

  function calculate() {
    if (validate()) {
      let imc = weight / (height * height)
      let classification = ''
      let degree = ''

      switch (true) {
        //IMC	CLASSIFICAÇÃO	OBESIDADE (GRAU)
        case (imc < 18.5):
          classification = 'Magreza'
          degree = '0'
          break
        case (imc <= 24.9):
          classification = 'Normal'
          degree = '0'
          break
        case (imc <= 29.9):
          classification = 'Sobrepeso'
          degree = 'I'
          break
        case (imc <= 39.9):
          classification = 'Obesidade'
          degree = 'II'
          break
        default:
          classification = 'Obesidade Grave'
          degree = 'III'
          break
      }
      Alert.alert(
        'Resultado',
        `Peso: ${weight} - Altura: ${height}\n
        IMC: ${imc.toFixed(1)}\n
        Classificação: ${classification}\n
        Grau de Obesidade: ${degree}`
      )
      setWeight('')
      setHeight('')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h3}>Cálculo do</Text>
      <Text style={styles.h1}>IMC</Text>

      <View style={styles.logo}>
        <Image source={require('./assets/img/imc-logo.png')}></Image>
      </View>

      <View style={styles.inputs}>
        <View>
          <Text style={styles.inputLabel}>Peso:</Text>
          <Text style={styles.inputLabel}>Altura:</Text>
        </View>
        <View>
          <TextInput
            style={styles.inputField}
            placeholder=' Informe seu peso...'
            keyboardType='numeric'
            value={weight}
            onChangeText={(weight) => setWeight(weight)}>
          </TextInput>
          <TextInput
            style={styles.inputField}
            placeholder=' Informe sua altura...'
            keyboardType='numeric'
            value={height}
            onChangeText={setHeight}>
          </TextInput>
        </View>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}
          onPress={calculate}>
          <Text style={styles.btnLabel}>Calcular</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
