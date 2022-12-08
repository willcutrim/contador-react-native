import { TouchableOpacity } from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';




export const Container = styled(TouchableOpacity)`

    height: 52px;
    width: 52px;

    align-items: center;
    justify-content: center;

    /* background-color: #000; */
    border-radius: 30px;
    
    
`;

export const Icon = styled(MaterialIcons)`
    size: 24px;
    color: #FFF;
    
`;