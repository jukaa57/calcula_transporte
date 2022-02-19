import React from 'react'

import styled from 'styled-components/native';

export const Container = styled.View `
    flex: 1;
    background: #333;
    margin-top: 5%;
`;
export const Scroll = styled.ScrollView`
    height: 95%;
    margin-top: 5%;
`;

export const ViewCol = styled.View `
    margin-top: 6%;
    align-items: center;
    justify-content: center;
`;

export const ViewRow = styled.View `
    flex-direction: row;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
`;

export const ViewRowCheck = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #08f;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: 700;
    color: #08f;
    font-family: san-serif;
    text-align: center;
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
    border: #fff;
    border-radius: 5px;
    width: 50%;
    color: #fff;
`;

export const Result = styled.Text`
    font-size: 25px;
    color: #999;
    font-weight: 700;
    margin-bottom: 15px;
`;