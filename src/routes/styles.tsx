import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { FlatList, } from "react-native";


export const Container = styled(LinearGradient).attrs({
    colors: ['#FFF', '#EDF1F9'],
    start: { x:0, y: 0 },
    end: { x: 1, y: 1 }
})`
    flex: 1;
    padding-top: ${22 + getStatusBarHeight(true)}px;
`;

export const Header = styled.View`
    backgroundColor: #7A3294;
    width: 100%;
    height: 45px;
    justifyContent: center;
    padding-left: 15px;
`;

export const TituloHeader = styled.Text`
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`;

export const TextoTitulo = styled.Text`
    color: rgba(3,3,3,0.40);
    font-weight: bold;
    font-size: 12px;
    
`;

export const Texto = styled.Text`
    color: #000;
    font-size: 16px;
`;

export const TextoBotao = styled.Text`
    font-size: 16px;
    color: #fff;
`;

export const InputBusca = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    padding: 12px 15px;
    border-radius: 4px;
    font-size: 16px;
    color: #333;
    background: #FFF;
`;

export const List: new <T>() => FlatList<T> = styled(FlatList).attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
  })`
    margin-top: 10px;
  ` as any;

export const MudaTexto = styled.Text` 
    font-size: 24px;
    padding: 0 10px;
`;

export const BEditar = styled.TouchableOpacity`
    background: #7A3294;
    margin-bottom: 5px;
    margin-left: 10px;
    justify-content: center;
    border-radius: 5px;
    padding: 0 14px;
    flex-direction: row;
    width: 100px;
    height: 30px;
    alignItems: center;
    alignSelf: center;
`;

export const BQuantidade = styled.TouchableOpacity`
    border-radius: 5px;
    width: 35px;
    height:35px;
    justify-content: center;
`;

export const BFinalizar = styled.TouchableOpacity`
    background: #7A3294;
    position: absolute;
    bottom: 110%;
    justify-content: center;
    border-radius: 5px;
    padding: 0 14px;
    width: 75%;
    height: 45px;
    alignItems: center;
    alignSelf: center;
`;
    
export const TextBooton = styled.Text`
    color:#000;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
`;
    
export const ComboDados = styled.Picker`
    width: 200px;
`;

export const Scroll = styled.ScrollView`
    maxHeight: 98%;
`;

export const ViewBotoes = styled.View`
    flex-direction: row;
`;

export const ViewLista = styled.View`
    margin-bottom: 10px;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.10);
    width: 100%;
    background-color: #fff
`;

export const ViewRow = styled.View`
    padding: 0 15px;
    margin-bottom: 8px;
    flex-direction: row;
    alignContent: flex-start;
    justify-content: space-between;
`;

export const ViewColum = styled.View`
    margin-bottom: 15px;
    padding-top: 15px;
    padding-bottom: 10px;
    width: 100%;
    flex-direction: column;
    backgroundColor: #fff;
`;

export const ViewBottom = styled.View`
    padding-top: 50px;
    width: 100%;
    flex-direction: column;
`;