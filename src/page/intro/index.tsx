import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Container, ViewCol, Text, InpText,} from './styled'

export default function intro() {
    const [passagem1, setPassagem1] = useState('')
    const [passagem2, setPassagem2] = useState('')
    const [passagem3, setPassagem3] = useState('')
    const total1 = (passagem1 * 2 * 22)
    const total2 =(passagem2 * 1 * 22) 
    const total3 = (passagem3 * 2 * 22)
    const total = (total1 + total2 + total3).toFixed(2)
    return (
      <Container style={{}}>
          <ViewCol>
            <Text>Insira o valor da passagem</Text>
            <InpText
                keyboardType = 'phone-pad' 
                maxLength = {5}
                onChangeText={setPassagem1}
                value = {passagem1}
            />
            <InpText
                keyboardType = 'phone-pad'
                maxLength = {5}
                onChangeText={setPassagem2}
                value = {passagem2}
            />
            <InpText
            keyboardType = 'phone-pad'
            onChangeText={setPassagem3}
            maxLength = {5}
            value = {passagem3}
            />
          </ViewCol>
          <ViewCol>
              <Text>{total}</Text>
          </ViewCol>
        <StatusBar style="auto" />
      </Container>
    );
  }