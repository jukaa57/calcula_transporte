import React from 'react'

import styled from 'styled-components/native';


export const Container = styled.View `
    flex: 1;
    background: #333;
`;
export const Scroll = styled.ScrollView`
    height: 95%;
    margin-top: 5%;
`;

export const ViewCol = styled.View `
    background: #fff;
    margin-top: 6%;
    align-items: center;
    justify-content: center;
`;

export const ViewRow = styled.View `
    flex-direction: row;
    background: #fff;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const ViewRowCheck = styled.View `
    flex-direction: row;
    background: #fff;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #08f;
`;
export const Title = styled.Text`
    font-size: 24px;
    color: #08f;
`;

export const CheckboxView = styled.View`
    margin-bottom: 25px;
`;

export const Line = styled.View`
    border-top-width: 1px;
    margin: 5px  0px  20px 0px;
    width:100%;
    height: 1px;
    border-color: #999;

`;


export const Button = styled.Button`
    color: #08f;
`;

export const InpText = styled.TextInput`
    padding: 3px 10px;
    font-size: 18px;
    height: 40px;
    border: #f25;
    border-radius: 5px;
    width: 50%;
`;

export const Result = styled.Text`
    font-size: 25px;
    color: #777;
    font-weight: 700;
    font-family: sans-serif;
    margin-bottom: 15px;
`;