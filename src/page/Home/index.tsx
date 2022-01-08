import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {Container, ViewCol, Text, ViewRowCheck, InpText, CheckboxView, Line, Title, Button, ViewRow, Result} from './styled';
import {Modal, Checkbox} from "react-native-paper"

export default function intro() {
    const [passagem1, setPassagem1] = useState(false)
    const [passagem2, setPassagem2] = useState(false)
    const [passagem3, setPassagem3] = useState(false)
    const [baseCalculo1, setBaseCalculo1] = useState('')
    const [baseCalculo2, setBaseCalculo2] = useState('')
    const [baseCalculo3, setBaseCalculo3] = useState('')
    const [baseCalculo4, setBaseCalculo4] = useState('')
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    
    function calcular() {
      let resultado;
      if(passagem1) {
        if(check1 === false && check2 === false){
        resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2)
        } else if(check1 == true && check2 == false){
        resultado =   (parseFloat(baseCalculo1) * 2) + parseFloat(baseCalculo2)
        } else if(check1 == false && check2 == true){
        resultado =   parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2)
        }
      }

      if(passagem2) {
        if(check1 === false && check2 === false && check3 === false){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3)
        } else if(check1 === true && check2 === false && check3 === false){
          resultado = (parseFloat(baseCalculo1) * 2) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3)
        }else if(check1 === false && check2 === true && check3 === false){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3)
        }else if(check1 === false && check2 === false && check3 === true){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2)
        } else if(check1 === true && check2 === false && check3 === true){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2)
        } else if(check1 === true && check2 === true && check3 === false){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3)
        } else if(check1 === false && check2 === true && check3 === true){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2)
        } else if(check1 === true && check2 === true && check3 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2)
        }
      }

      if(passagem3) {
        if(check1 === false && check2 === false && check3 === false && check4 === false){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if(check1 === true && check2 === false && check3 === false && check4 === false){
          resultado = (parseFloat(baseCalculo1) * 2) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if(check1 === false && check2 === true && check3 === false && check4 === false){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if(check1 === false && check2 === false && check3 === true && check4 === false){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if(check1 === false && check2 === false && check3 === false && check4 === true){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === true && check2 === false && check3 === false && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === true && check2 === false && check3 === true && check4 === false){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if(check1 === true && check2 === true && check3 === false && check4 === false){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if(check1 === false && check2 === true && check3 === false && check4 === true){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === false && check2 === true && check3 === true && check4 === false){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if(check1 === false && check2 === false && check3 === true && check4 === true){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === true && check2 === true && check3 === true && check4 === false){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if(check1 === true && check2 === true && check3 === false && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === true && check2 === false && check3 === true && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2)+ (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === false && check2 === true && check3 === true && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if(check1 === true && check2 === true && check3 === true && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        }
      }
      
      return resultado?.toFixed(2)
    }

    return (
      <Container style={{}}>
          <ViewCol>
            <Title>Insira o valor da passagem</Title>
            <Line/>

            <Text> Quantas Passagens irá calcular? </Text>

            <CheckboxView>
              <ViewRowCheck>
                <Checkbox
                  status = {passagem1? 'checked':'unchecked'}
                  onPress={() => setPassagem1(!passagem1)}
                />
                <Text>2 Passagens</Text>
              </ViewRowCheck>

              <ViewRowCheck>
                <Checkbox
                  status = {passagem2? 'checked':'unchecked'}
                  onPress={() => setPassagem2(!passagem2)}
                />
                <Text>3 Passagens</Text>
              </ViewRowCheck>

              <ViewRowCheck>
                <Checkbox
                  status = {passagem3? 'checked':'unchecked'}
                  onPress={() => setPassagem3(!passagem3)}
                />
                <Text>4 Passagens</Text>
              </ViewRowCheck>
            </CheckboxView>

            {
            passagem1 && 
            <>
              <ViewRow>
                <InpText
                  keyboardType='phone-pad'
                  maxLength = {5}
                  onChangeText={setBaseCalculo1}
                  value = {baseCalculo1}
                />
                <Checkbox
                  status = {check1? 'checked':'unchecked'}
                  onPress={() => setCheck1(!check1)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>
              
              <ViewRow>
                <InpText
                  onChangeText={setBaseCalculo2}
                  value = {baseCalculo2}
                />
                <Checkbox
                  status = {check2? 'checked':'unchecked'}
                  onPress={() => setCheck2(!check2)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>
            </>
            }

            {
            passagem2 && 
            <>
              <ViewRow>
                <InpText

                  keyboardType = 'phone-pad' 
                  maxLength = {5}
                  onChangeText={setBaseCalculo1}
                  value = {baseCalculo1}
                />
                <Checkbox
                  status = {check1? 'checked':'unchecked'}
                  onPress={() => setCheck1(!check1)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>

              <ViewRow>
                <InpText
                    keyboardType = 'phone-pad'
                    maxLength = {5}
                    onChangeText={setBaseCalculo2}
                    value = {baseCalculo2}
                />
                <Checkbox
                  status = {check2? 'checked':'unchecked'}
                  onPress={() => setCheck2(!check2)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>

              <ViewRow>
                <InpText
                  keyboardType = 'phone-pad'
                  onChangeText={setBaseCalculo3}
                  maxLength = {5}
                  value = {baseCalculo3}
                />
                <Checkbox
                  status = {check3? 'checked':'unchecked'}
                  onPress={() => setCheck3(!check3)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>
            </>
            }

            {
            passagem3 &&
            <>
              <ViewRow>
                <InpText
                    keyboardType = 'phone-pad' 
                    maxLength = {5}
                    onChangeText={setBaseCalculo1}
                    value = {baseCalculo1}
                />
                <Checkbox
                  status = {check1? 'checked':'unchecked'}
                  onPress={() => setCheck1(!check1)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>

              <ViewRow>
                <InpText
                    keyboardType = 'phone-pad'
                    maxLength = {5}
                    onChangeText={setBaseCalculo2}
                    value = {baseCalculo2}
                />
                <Checkbox
                  status = {check2? 'checked':'unchecked'}
                  onPress={() => setCheck2(!check2)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>

              <ViewRow>
                <InpText
                  keyboardType = 'phone-pad'
                  onChangeText={setBaseCalculo3}
                  maxLength = {5}
                  value = {baseCalculo3}
                />
                <Checkbox
                  status = {check3? 'checked':'unchecked'}
                  onPress={() => setCheck3(!check3)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow>

              <ViewRow>
                <InpText
                  keyboardType = 'phone-pad'
                  onChangeText={setBaseCalculo4}
                  maxLength = {5}
                  value = {baseCalculo4}
                />
                <Checkbox
                  status = {check4? 'checked':'unchecked'}
                  onPress={() => setCheck4(!check4)}
                />
                <Text>Ida e Volta</Text>
              </ViewRow> 
            </>
            }

            <Result>{calcular()}</Result>

            <Button  
              disabled={passagem1 == false && passagem2 == false && passagem3 == false}
              onPress={() => calcular()}
              title="Calcular"
            />
          </ViewCol>
      </Container>
    );
  }