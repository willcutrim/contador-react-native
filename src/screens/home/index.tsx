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

    return (
        
        <Container>
            <AppBar/>
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