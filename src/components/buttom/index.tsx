import { Button, Title, Container } from './styles';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
    addNumber: () => void;
}

export function Btn({ title, addNumber, ...rest}: Props){
    return(
        <Container>
            <Button onPress={addNumber}>
                <Title>
                    {title}
                </Title>
            </Button>
        </Container>
    );
}