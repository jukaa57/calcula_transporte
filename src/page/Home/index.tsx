import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import {Container, ViewCol, Text, ViewRowCheck, InpText, CheckboxView, Line, Title, Button, ViewRow, Result, Scroll} from './styled';
import {Modal, Checkbox} from "react-native-paper"

export default function intro() {
    const [passagem1, setPassagem1] = useState(false)
    const [passagem2, setPassagem2] = useState(false)
    const [passagem3, setPassagem3] = useState(false)
    const [passagem4, setPassagem4] = useState(false)
    const [baseCalculo1, setBaseCalculo1] = useState('')
    const [baseCalculo2, setBaseCalculo2] = useState('')
    const [baseCalculo3, setBaseCalculo3] = useState('')
    const [baseCalculo4, setBaseCalculo4] = useState('')
    const [multiplyDay, setMultiplyDay] = useState('')
    const [check1, setCheck1] = useState(false)
    const [check2, setCheck2] = useState(false)
    const [check3, setCheck3] = useState(false)
    const [check4, setCheck4] = useState(false)
    const [checkWeekly, setCheckWeekly] = useState(false)
    const [checkMonthly, setCheckMonthly] = useState(false)
    const [checkPerson, setCheckPerson] = useState(false)


    
    function calcular() {
      let resultado: any;

      if (passagem1) {
        if (check1 === false) {
          resultado = parseFloat(baseCalculo1)
        } else if (check1 === true) {
          resultado = (parseFloat(baseCalculo1)*2)
        }
      }

      if (passagem2) {
        if (check1 === false && check2 === false){
        resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2)
        } else if (check1 == true && check2 == false){
        resultado =   (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2)
        } else if (check1 == false && check2 == true){
        resultado =   parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2)
        } else if (check1 == true && check2 == true){
          resultado =  (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2)
        }
      }

      if (passagem3) {
        if (check1 === false && check2 === false && check3 === false){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3)
        } else if (check1 === true && check2 === false && check3 === false){
          resultado = (parseFloat(baseCalculo1) * 2) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3)
        }else if (check1 === false && check2 === true && check3 === false){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3)
        }else if (check1 === false && check2 === false && check3 === true){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2)
        } else if (check1 === true && check2 === false && check3 === true){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2)
        } else if (check1 === true && check2 === true && check3 === false){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3)
        } else if (check1 === false && check2 === true && check3 === true){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2)
        } else if (check1 === true && check2 === true && check3 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2)
        }
      }

      if (passagem4) {
        if (check1 === false && check2 === false && check3 === false && check4 === false){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if (check1 === true && check2 === false && check3 === false && check4 === false){
          resultado = (parseFloat(baseCalculo1) * 2) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if (check1 === false && check2 === true && check3 === false && check4 === false){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if (check1 === false && check2 === false && check3 === true && check4 === false){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if (check1 === false && check2 === false && check3 === false && check4 === true){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === true && check2 === false && check3 === false && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === true && check2 === false && check3 === true && check4 === false){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if (check1 === true && check2 === true && check3 === false && check4 === false){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + parseFloat(baseCalculo4)
        } else if (check1 === false && check2 === true && check3 === false && check4 === true){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === false && check2 === true && check3 === true && check4 === false){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if (check1 === false && check2 === false && check3 === true && check4 === true){
          resultado = parseFloat(baseCalculo1) + parseFloat(baseCalculo2) + (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === true && check2 === true && check3 === true && check4 === false){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + parseFloat(baseCalculo4)
        } else if (check1 === true && check2 === true && check3 === false && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + parseFloat(baseCalculo3) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === true && check2 === false && check3 === true && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + parseFloat(baseCalculo2)+ (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === false && check2 === true && check3 === true && check4 === true){
          resultado = parseFloat(baseCalculo1) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        } else if (check1 === true && check2 === true && check3 === true && check4 === true){
          resultado = (parseFloat(baseCalculo1)*2) + (parseFloat(baseCalculo2)*2) + (parseFloat(baseCalculo3)*2) + (parseFloat(baseCalculo4)*2)
        }
      }
      
      //calculo semanal / mensal
      if (checkWeekly) {
        resultado *= 5
      } else if (checkMonthly) {
        resultado *= 22
      } else if (checkPerson) {
        resultado *= parseInt(multiplyDay)
      }

      return resultado?.toFixed(2)
    }

    function closeBox (num: number) {
      if(num == 1) {
        setPassagem1(!passagem1)

        setPassagem2(false)
        setPassagem3(false)
        setPassagem4(false)
      } else if(num == 2) {
        setPassagem2(!passagem2)

        setPassagem1(false)
        setPassagem3(false)
        setPassagem4(false)
      } else if(num == 3) {
        setPassagem3(!passagem3)

        setPassagem1(false)
        setPassagem2(false)
        setPassagem4(false)
      } else if(num == 4) {
        setPassagem4(!passagem4)

        setPassagem1(false)
        setPassagem2(false)
        setPassagem3(false)
      }
      if (num == 5) {
        setCheckWeekly(!checkWeekly)
        setMultiplyDay('')
        setCheckMonthly(false)
        setCheckPerson(false)
      } else if (num == 6) {
        setCheckMonthly(!checkMonthly)
        setMultiplyDay('')
        setCheckWeekly(false)
        setCheckPerson(false)
      } else if (num == 7) {

        setCheckPerson(!checkPerson)
        setCheckMonthly(false)
        setCheckWeekly(false)
      }
    }

    useEffect(() => {
      setBaseCalculo1('')
      setBaseCalculo2('')
      setBaseCalculo3('')
      setBaseCalculo4('')
      setMultiplyDay('')
      setCheckWeekly(false)
      setCheckMonthly(false)
      setCheckPerson(false)
      setCheck1(false)
      setCheck2(false)
      setCheck3(false)
      setCheck4(false)
    }, [passagem1,passagem2,passagem3,passagem4])

    return (
      <Container>
          <ViewCol>
            <Scroll>
                <Title>Calculadora de Transporte</Title>
                <Line/>

                <Text> Quantas Passagens irá calcular? </Text>

                <CheckboxView>
                  <ViewRowCheck>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {passagem1? 'checked':'unchecked'}
                      onPress={() => closeBox(1)}
                    />
                    <Text>1 Passagem</Text>
                  </ViewRowCheck>

                  <ViewRowCheck>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {passagem2? 'checked':'unchecked'}
                      onPress={() => closeBox(2)}
                    />
                    <Text>2 Passagens</Text>
                  </ViewRowCheck>

                  <ViewRowCheck>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {passagem3? 'checked':'unchecked'}
                      onPress={() => closeBox(3)}
                    />
                    <Text>3 Passagens</Text>
                  </ViewRowCheck>

                  <ViewRowCheck>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {passagem4? 'checked':'unchecked'}
                      onPress={() => closeBox(4)}
                    />
                    <Text>4 Passagens</Text>
                  </ViewRowCheck>
                </CheckboxView>

                {
                  passagem1 && 
                  <>
                    <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                      <Checkbox
                        color="#08f"
                        uncheckedColor="#fff"
                        status = {checkWeekly? 'checked':'unchecked'}
                        onPress={() => closeBox(5)}
                      />
                      <Text>Semanal (5 dias)</Text>
                    </ViewRowCheck>

                    <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                      <Checkbox
                        color="#08f"
                        uncheckedColor="#fff"
                        status = {checkMonthly? 'checked':'unchecked'}
                        onPress={() => closeBox(6)}
                      />
                      <Text>Mensal (22 dias)</Text>
                    </ViewRowCheck>

                    <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                      <Checkbox
                        color="#08f"
                        uncheckedColor="#fff"
                        status = {checkPerson? 'checked':'unchecked'}
                        onPress={() => closeBox(7)}
                      />
                      <Text>Personalizado</Text>
                      { checkPerson &&
                        <InpText
                          style={{backgroundColor:"#fff", marginTop: 15, marginBottom: 10, marginLeft: 10}}
                          keyboardType='decimal-pad'
                          maxLength = {5}
                          onChangeText={setMultiplyDay}
                          value = {multiplyDay}
                        />
                      }
                    </ViewRowCheck>

                    <ViewRow>
                      <InpText
                        style={{backgroundColor:"#fff"}}
                        keyboardType='decimal-pad'
                        maxLength = {5}
                        onChangeText={setBaseCalculo1}
                        value = {baseCalculo1}
                      />
                      <Checkbox
                        color="#08f"
                        uncheckedColor="#fff"
                        status = {check1? 'checked':'unchecked'}
                        onPress={() => setCheck1(!check1)}
                      />
                      <Text>Ida e Volta</Text>
                    </ViewRow>
                  </>
                }
                {
                passagem2 && 
                <>
                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkWeekly? 'checked':'unchecked'}
                      onPress={() => closeBox(5)}
                    />
                    <Text>Semanal (5 dias)</Text>
                  </ViewRowCheck>

                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkMonthly? 'checked':'unchecked'}
                      onPress={() => closeBox(6)}
                    />
                    <Text>Mensal (22 dias)</Text>
                  </ViewRowCheck>
                  
                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkPerson? 'checked':'unchecked'}
                      onPress={() => closeBox(7)}
                    />
                    <Text>Personalizado</Text>
                    { checkPerson &&
                      <InpText
                        style={{backgroundColor:"#fff", marginTop: 15, marginBottom: 10, marginLeft: 10}}
                        keyboardType='decimal-pad'
                        maxLength = {5}
                        onChangeText={setMultiplyDay}
                        value = {multiplyDay}
                      />
                    }
                  </ViewRowCheck>


                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                      keyboardType='decimal-pad'
                      maxLength = {5}
                      onChangeText={setBaseCalculo1}
                      value = {baseCalculo1}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check1? 'checked':'unchecked'}
                      onPress={() => setCheck1(!check1)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>
                  
                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                      keyboardType='decimal-pad'
                      maxLength = {5}
                      onChangeText={setBaseCalculo2}
                      value = {baseCalculo2}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check2? 'checked':'unchecked'}
                      onPress={() => setCheck2(!check2)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>
                </>
                }

                {
                passagem3 && 
                <>
                 <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkWeekly? 'checked':'unchecked'}
                      onPress={() => closeBox(5)}
                    />
                    <Text>Semanal (5 dias)</Text>
                  </ViewRowCheck>

                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkMonthly? 'checked':'unchecked'}
                      onPress={() => closeBox(6)}
                    />
                    <Text>Mensal (22 dias)</Text>
                  </ViewRowCheck>

                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkPerson? 'checked':'unchecked'}
                      onPress={() => closeBox(7)}
                    />
                    <Text>Personalizado</Text>
                    { checkPerson &&
                      <InpText
                        style={{backgroundColor:"#fff", marginTop: 15, marginBottom: 10, marginLeft: 10}}
                        keyboardType='decimal-pad'
                        maxLength = {5}
                        onChangeText={setMultiplyDay}
                        value = {multiplyDay}
                      />
                    }
                  </ViewRowCheck>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}

                      keyboardType = 'decimal-pad' 
                      maxLength = {5}
                      onChangeText={setBaseCalculo1}
                      value = {baseCalculo1}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check1? 'checked':'unchecked'}
                      onPress={() => setCheck1(!check1)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                        keyboardType = 'decimal-pad'
                        maxLength = {5}
                        onChangeText={setBaseCalculo2}
                        value = {baseCalculo2}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check2? 'checked':'unchecked'}
                      onPress={() => setCheck2(!check2)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                      keyboardType = 'decimal-pad'
                      maxLength = {5}
                      onChangeText={setBaseCalculo3}
                      value = {baseCalculo3}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check3? 'checked':'unchecked'}
                      onPress={() => setCheck3(!check3)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>
                </>
                }

                {
                passagem4 &&
                <>
                 <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkWeekly? 'checked':'unchecked'}
                      onPress={() => closeBox(5)}
                    />
                    <Text>Semanal (5 dias)</Text>
                  </ViewRowCheck>

                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkMonthly? 'checked':'unchecked'}
                      onPress={() => closeBox(6)}
                    />
                    <Text>Mensal (22 dias)</Text>
                  </ViewRowCheck>

                  <ViewRowCheck style={{justifyContent: 'flex-start'}}>
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {checkPerson? 'checked':'unchecked'}
                      onPress={() => closeBox(7)}
                    />
                    <Text>Personalizado</Text>
                    { checkPerson &&
                      <InpText
                        style={{backgroundColor:"#fff", marginTop: 15, marginBottom: 10, marginLeft: 10}}
                        keyboardType='decimal-pad'
                        maxLength = {5}
                        onChangeText={setMultiplyDay}
                        value = {multiplyDay}
                      />
                    }
                  </ViewRowCheck>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                        keyboardType = 'decimal-pad' 
                        maxLength = {5}
                        onChangeText={setBaseCalculo1}
                        value = {baseCalculo1}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check1? 'checked':'unchecked'}
                      onPress={() => setCheck1(!check1)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                        keyboardType = 'decimal-pad'
                        maxLength = {5}
                        onChangeText={setBaseCalculo2}
                        value = {baseCalculo2}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check2? 'checked':'unchecked'}
                      onPress={() => setCheck2(!check2)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                      keyboardType = 'decimal-pad'
                      maxLength = {5}
                      onChangeText={setBaseCalculo3}
                      value = {baseCalculo3}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check3? 'checked':'unchecked'}
                      onPress={() => setCheck3(!check3)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow>

                  <ViewRow>
                    <InpText
                      style={{backgroundColor:"#fff"}}
                      keyboardType = 'decimal-pad'
                      maxLength = {5}
                      onChangeText={setBaseCalculo4}
                      value = {baseCalculo4}
                    />
                    <Checkbox
                      color="#08f"
                      uncheckedColor="#fff"
                      status = {check4? 'checked':'unchecked'}
                      onPress={() => setCheck4(!check4)}
                    />
                    <Text>Ida e Volta</Text>
                  </ViewRow> 
                </>
                }
                <Result style={check1 || check2 || check3 || check4 ? [style.textWhite]:[style.textGray] }>{calcular() !== 'NaN' && calcular()}</Result>
            </Scroll>
          </ViewCol>
      </Container>
    );
  }

  const style = StyleSheet.create({
    textWhite: {
      color: "#fff"
    },
    textGray: {
      color: "#aaa"
    }
  })