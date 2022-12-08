import { Container, Icon } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';


type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    zerar: () => void;
}

export function ButtonIcon({ icon, zerar, ...rest}: Props){
    return (
        <Container onPress={zerar}>
            <Icon
                name={icon}
            />
        </Container>
    );
}