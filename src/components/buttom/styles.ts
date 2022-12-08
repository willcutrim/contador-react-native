import styled from "styled-components/native";
import { TouchableOpacity } from 'react-native'; 


export const Container = styled.View`
    width: 100%;
    align-items: flex-end;
    padding-right: 10px;
    padding-bottom: 22px;
`;

export const Button = styled(TouchableOpacity)`
    height: 56px;
    width: 56px;

    background-color: #1E90FF;

    align-items: center;
    justify-content: center;
    
    border-radius: 30px;

    
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #FFF;
    
`;