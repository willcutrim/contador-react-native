import { Btn } from '@components/buttom';
import { Text } from '@components/Text';
import { useState } from 'react';
import { Container } from './styles';
import { AppBar } from '@components/appBar';

export function HomePage(){

    

    const [count, setCount] = useState(0);
    
    
    function Count(){
        setCount(count + 1);
    }

    function Zerar(){
        setCount(0);
    }


    return (
        
        <Container>
            <AppBar
                zerar={() => Zerar()}
            />
            <Text
                title={`contagem ${count}`}
            />
            <Btn
                addNumber={() => Count()}
                title='+'
            />
        </Container>
    );
}