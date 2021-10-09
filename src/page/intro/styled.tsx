import React from 'react'

import styled from 'styled-components/native';


export const Container = styled.View `
    flex: 1;
    
    background: #333;
`;

export const ViewCol = styled.View `
    background: #fff;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.Text`
    color: #08f;
`;

export const InpText = styled.TextInput`
    height: 40px;
    border: #f25;
    width: 50%;
`;