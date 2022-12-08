import { ButtonIcon } from '@components/ButtonIcon';
import { TouchableOpacityProps } from 'react-native';
import { Container, Txt } from './styles';

type Props = TouchableOpacityProps & {
    
    
    zerar: () => void;
}

export function AppBar({zerar}: Props){
    
    return (
        <Container>
            <Txt>
                Contador
            </Txt>

            <ButtonIcon
                zerar={zerar}
                icon='sync'
            />
        </Container>
    );
}